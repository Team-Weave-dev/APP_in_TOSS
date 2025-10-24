# 개발 구조 (Development Architecture)

## Overview

Apps in Toss offers SDK and API solutions to simplify development. The SDK is provided in two formats: **WebView** and **React Native**.

> ⚠️ **Critical Requirement**: Using the Apps in Toss API mandates mTLS-based server-to-server communication. mTLS certificates encrypt partner-to-platform communication and enable mutual identity verification.

### Features Requiring mTLS

The following features **must use** mTLS certificate-based communication:
- Toss Login
- Toss Pay
- In-app Purchase
- Functional Push & Notifications
- Promotions (Toss Points)

---

## mTLS Certificate Issuance Process

Server mTLS certificates can be issued directly through the console.

### Step 1: Select Your App

Access the Apps in Toss console, select your app, navigate to the **mTLS Certificate** tab in the left menu, and click the **+ Issue** button.

### Step 2: Certificate Issuance & Storage

Once issued, you can download the **certificate and key files**.

⚠️ **Important Notes**:
- Store certificate and key files in a secure location
- Renew certificates before expiration

### Certificate Management

The console allows you to view issued certificates. While typically only one certificate is used, you can register multiple certificates for seamless transitions without service interruption.

---

## Code Examples: Sending Requests with Certificates

Below are implementations across different programming languages for mTLS-authenticated requests:

### Kotlin Example
```kotlin
import java.security.KeyStore
import javax.net.ssl.*

class TLSClient {
    fun createSSLContext(certPath: String, keyPath: String): SSLContext {
        val cert = loadCertificate(certPath)
        val key = loadPrivateKey(keyPath)
        val keyStore = KeyStore.getInstance(KeyStore.getDefaultType())
        keyStore.load(null, null)
        keyStore.setCertificateEntry("client-cert", cert)
        keyStore.setKeyEntry("client-key", key, "".toCharArray(), arrayOf(cert))

        val kmf = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm())
        kmf.init(keyStore, "".toCharArray())

        return SSLContext.getInstance("TLS").apply {
            init(kmf.keyManagers, null, null)
        }
    }
}
```

### Python Example
```python
import requests

class TLSClient:
    def __init__(self, cert_path, key_path):
        self.cert_path = cert_path
        self.key_path = key_path

    def make_request(self, url):
        response = requests.get(
            url,
            cert=(self.cert_path, self.key_path),
            headers={'Content-Type': 'application/json'}
        )
        return response.text
```

### JavaScript/Node.js Example
```javascript
const https = require('https');
const fs = require('fs');

const options = {
  cert: fs.readFileSync('/path/to/client-cert.pem'),
  key: fs.readFileSync('/path/to/client-key.pem'),
  rejectUnauthorized: true,
};

const req = https.request(
  'https://apps-in-toss-api.toss.im/endpoint',
  { method: 'GET', ...options },
  (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => console.log('Response:', data));
  }
);
```

### C# Example
```csharp
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;

class Program {
    static async Task Main(string[] args) {
        var handler = new HttpClientHandler();
        handler.ClientCertificates.Add(
            new X509Certificate2("/path/to/client-cert.pem")
        );

        using var client = new HttpClient(handler);
        var response = await client.GetAsync("https://apps-in-toss-api.toss.im/endpoint");
    }
}
```

### C++ Example (libcurl)
```cpp
#include <curl/curl.h>

int main() {
    CURL* curl = curl_easy_init();
    curl_easy_setopt(curl, CURLOPT_URL, "https://apps-in-toss-api.toss.im/endpoint");
    curl_easy_setopt(curl, CURLOPT_SSLCERT, "/path/to/client-cert.pem");
    curl_easy_setopt(curl, CURLOPT_SSLKEY, "/path/to/client-key.pem");
    curl_easy_perform(curl);
    curl_easy_cleanup(curl);
}
```

---

## Frequently Asked Questions

**Q: Why am I getting an `ERR_NETWORK` error?**
A: This occurs when calling APIs without mTLS implementation. Configure mTLS on your server before making API calls.

**Q: What happens if a certificate is compromised?**
A: Certificates enable direct server authentication. If exposed, malicious actors could impersonate your service or cause unintended transactions. Immediately revoke and reissue the certificate.

**Q: What's the process when certificates expire?**
A: Certificates remain valid for 390 days. Upon expiration, authentication fails and server communication halts. Pre-issue and replace certificates through the console. Future notifications will alert you 30, 7, and 1 day before expiration.

**Q: How many certificates can I issue?**
A: There is no limit. Multiple registrations support seamless certificate transitions without service downtime.

---
**출처**: [Apps in Toss 개발자센터](https://developers-apps-in-toss.toss.im/development/integration-process.html)
