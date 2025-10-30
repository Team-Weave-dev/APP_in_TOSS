'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useKakaoMaps } from '@/hooks/useKakaoMaps';
import { useGeolocation } from '@/hooks/useGeolocation';
import { usePlaceSearch } from '@/hooks/usePlaceSearch';
import { useRouletteAd } from '@/hooks/useRouletteAd';
import { KakaoMap } from '@/components/KakaoMap';
import { PlaceList } from '@/components/PlaceList';
import { Button, Loader } from '@toss/tds-mobile';

/**
 * Map page
 *
 * Displays map with nearby restaurants based on roulette result.
 * Implements progressive search radius expansion and rewarded ad integration.
 *
 * Query params:
 * - menu: Selected menu name from roulette
 */
export default function MapPage() {
  const searchParams = useSearchParams();
  const menuName = searchParams.get('menu');

  const { isLoaded: mapsLoaded, isLoading: mapsLoading, error: mapsError } = useKakaoMaps();
  const { position, loading: positionLoading, permissionDenied } = useGeolocation();
  const {
    results,
    loading: searchLoading,
    error: searchError,
    currentRadius,
    canExpand,
    search,
    expandRadius,
    expandWithAd,
  } = usePlaceSearch();
  const { loading: adLoading, showAdForSpin } = useRouletteAd();

  const [initialSearchDone, setInitialSearchDone] = useState(false);

  // Initial search when position is available
  useEffect(() => {
    if (!menuName || !position || initialSearchDone || searchLoading) return;

    console.log('🔍 Starting initial search:', menuName);
    search(menuName, position);
    setInitialSearchDone(true);
  }, [menuName, position, initialSearchDone, searchLoading, search]);

  // Handle radius expansion
  const handleExpand = () => {
    if (!menuName || !position) return;
    expandRadius(menuName, position);
  };

  // Handle ad-based expansion
  const handleExpandWithAd = () => {
    if (!menuName || !position) return;

    showAdForSpin(() => {
      expandWithAd(menuName, position);
    });
  };

  // Loading state
  if (mapsLoading || positionLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <Loader
          size="large"
          label={mapsLoading ? '지도를 불러오고 있어요' : '위치를 확인하고 있어요'}
        />
      </div>
    );
  }

  // Error state
  if (mapsError || !mapsLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-red-600 mb-4">❌ 지도를 불러올 수 없어요</p>
          <p className="text-gray-600 mb-4">{mapsError?.message}</p>
          <Button
            onClick={() => window.location.reload()}
            color="primary"
            variant="fill"
            size="large"
            display="inline"
          >
            새로고침
          </Button>
        </div>
      </div>
    );
  }

  if (!menuName) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-gray-600 mb-4">메뉴 정보가 없어요</p>
          <Button
            onClick={() => (window.location.href = '/')}
            color="primary"
            variant="fill"
            size="large"
            display="inline"
          >
            룰렛 돌리기
          </Button>
        </div>
      </div>
    );
  }

  if (!position) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-gray-600 mb-4">
            {permissionDenied
              ? '위치 권한이 필요해요. 설정에서 위치 권한을 허용해주세요.'
              : '위치 정보를 가져올 수 없어요.'}
          </p>
          <Button
            onClick={() => window.location.reload()}
            color="primary"
            variant="fill"
            size="large"
            display="inline"
          >
            다시 시도
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <Button
            onClick={() => (window.location.href = '/')}
            color="light"
            variant="weak"
            size="small"
            display="inline"
          >
            ← 돌아가기
          </Button>
          <h1 className="font-bold text-lg text-gray-900">
            {menuName} 검색
          </h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Map */}
        <div className="flex-1 h-96 md:h-auto">
          <KakaoMap center={position} places={results} />
        </div>

        {/* Place list */}
        <div className="flex-1 md:w-96 md:flex-initial border-t md:border-t-0 md:border-l border-gray-200">
          <PlaceList
            places={results}
            loading={searchLoading || adLoading}
            error={searchError}
            currentRadius={currentRadius}
            canExpand={canExpand}
            onExpand={handleExpand}
            onExpandWithAd={handleExpandWithAd}
          />
        </div>
      </div>
    </div>
  );
}
