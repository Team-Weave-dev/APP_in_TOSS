# Video Component Documentation

## Overview

The Video component manages video playback while controlling audio focus to prevent interrupting music from other apps. It automatically handles playback based on app state—pausing when the app moves to the background.

## Key Features

- **Audio Focus Management**: "오디오 포커스를 제어하는 로직이 구현된 컴포넌트" (implements audio focus control logic)
- **Automatic State Handling**: Automatically pauses video when app transitions to background
- **React Native Implementation**: Built on `react-native-video` version 6.0.0-alpha.6

## Component Signature

```typescript
Video: ForwardRefExoticComponent<Props & RefAttributes<VideoRef>>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `muted` | boolean | false | Controls audio muting |
| `paused` | boolean | false | Controls playback state; `false` enables autoplay |
| `source.uri` | string | — | Video file path or URL |
| `onAudioFocusChanged` | callback | — | Required when `muted` is `false`; fires on focus changes |
| `ref` | Ref<VideoRef> | — | Required ref for accessing video instance methods |

## Properties

- **isAvailable**: boolean - Indicates whether the Video component is usable in current environment

## Example Usage

```typescript
import { useRef } from 'react';
import { View } from 'react-native';
import { Video } from '@granite-js/react-native';

function VideoExample() {
  const videoRef = useRef(null);

  return (
    <View>
      <Video
        ref={videoRef}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }}
        muted={true}
        paused={false}
        resizeMode="cover"
        style={{ width: 300, height: 200, borderWidth: 1 }}
      />
    </View>
  );
}
```

## Important Notes

⚠️ **Compatibility**: "일부 타입이나 기능이 최신 버전과 호환되지 않을 수 있어요" (some types/features may be incompatible with newer versions)

## Related Components

- [RNVideoRef](/bedrock/reference/framework/UI/RNVideoRef.html) - Video instance reference interface
- [OnAudioFocusChanged](/bedrock/reference/framework/UI/OnAudioFocusChanged.html) - Audio focus callback handler
