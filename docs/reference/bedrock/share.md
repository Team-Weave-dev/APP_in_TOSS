# Share API Documentation

## Overview
The `share` function enables users to easily share content through the native share sheet, allowing selection from installed messaging and note-taking applications on their device.

## Function Signature

```typescript
function share(message: {
    message: string;
}): Promise<void>;
```

## Parameters

**options** (required, object)
- Contains the message data to be shared
- **options.message** (required, string): "The text string to share, for example: 'Hello! I'm sharing this content.'"

## Supported Environments
- **Frameworks**: React Native, WebView
- **Runtime**: Toss App, Sandbox App

## Usage Examples

### Basic Share Implementation

**React Example:**
```typescript
import { share } from "@apps-in-toss/web-framework";

const ShareButton = () => {
  const handleShare = async () => {
    try {
      await share({ message: "공유할 메시지" });
      console.log("공유 완료");
    } catch (error) {
      console.error("공유 실패:", error);
    }
  };

  return <button onClick={handleShare}>공유하기</button>;
};
```

### React Native Example

```typescript
import { share } from '@apps-in-toss/framework';
import { Button } from 'react-native';

function MyPage() {
  return (
    <Button
      title="공유"
      onPress={() => share({ message: '공유할 메시지입니다.' })}
    />
  );
}
```

### User Input-Based Sharing

```typescript
import { useState } from "react";
import { TextInput, Button, View, Alert } from "react-native";
import { share } from '@apps-in-toss/framework';

function ShareWithInput() {
  const [invitationMessage, setInvitationMessage] = useState("");

  const handleShare = () => {
    if (!invitationMessage.trim()) {
      Alert.alert("공유할 메시지를 입력하세요.");
      return;
    }
    share({ message: invitationMessage });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
        }}
        placeholder="초대 메시지를 입력하세요"
        value={invitationMessage}
        onChangeText={setInvitationMessage}
      />
      <Button title="초대 메시지 공유" onPress={handleShare} />
    </View>
  );
}
```

## Key Features
- Displays platform-native sharing interface (Android and iOS)
- Users select preferred app for message sharing
- Supports messaging apps, note applications, and other compatible services
- Returns a Promise that resolves when sharing completes
