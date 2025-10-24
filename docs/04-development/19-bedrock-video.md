# Video Component

## Overview

The Video component is a React Native UI element designed for the Toss App Sandbox environment. It implements audio focus control to prevent interrupting music playback from other apps while providing automatic playback management based on the app's state.

## Key Features

- **Audio Focus Management**: Prevents the video from interrupting music from other applications
- **Automatic Playback Control**: Automatically pauses video when the app enters background mode
- **React Native Video Integration**: Built on `react-native-video` version 6.0.0-alpha.6

## Type Signature

```typescript
Video: ForwardRefExoticComponent<Props & RefAttributes<VideoRef>>
```

## Parameters

### Props

**Video Properties** (from react-native-video library):

- `muted` (boolean, default: false) - Controls audio mute state
- `paused` (boolean, default: false) - Controls playback state; defaults to autoplay
- `onAudioFocusChanged` (OnAudioFocusChanged) - Required callback when audio is unmuted
- `source.uri` (string) - Video source path or URL

**Ref**

- `ref` (Ref<VideoRef>, required) - Reference object for accessing video instance methods

### Properties

- `isAvailable` (boolean) - Indicates whether the Video component is usable in the current environment

## Return Value

- **JSX.Element** - Renders a video player with animated transitions

## Example Implementation

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

⚠️ The implementation uses an older version of react-native-video. Some type definitions and features from newer versions may not be compatible.

## References

- [react-native-video GitHub](https://github.com/react-native-video/react-native-video)
- [Version 6.0.0-alpha.6 Release](https://github.com/TheWidlarzGroup/react-native-video/releases/tag/v6.0.0-alpha.6)
