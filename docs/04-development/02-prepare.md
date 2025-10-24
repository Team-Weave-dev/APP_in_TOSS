# 준비하기 (Getting Ready)

## Overview
This page outlines important development considerations for Apps in Toss mini apps.

## CORS Origin Registration

Register the following domains in your **Origin allowlist**:

- `https://<appName>.apps.tossmini.com` - For live service launch
- `https://<appName>.private-apps.tossmini.com` - For console QR testing

## iOS Third-Party Cookie Policy

On iOS/iPadOS 13.4+, third-party cookies are completely blocked. Implementing cookie-based authentication through partner domains (outside the Apps in Toss domain) will fail.

**Recommendation:** Implement token-based authentication methods instead.

*Reference:* [Full third-party cookie blocking](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)

## App Transport Security (ATS)

- Sandbox apps: HTTP communication permitted
- **Live environment: HTTPS only**

Note that HTTP functionality only operates correctly in sandbox environments.

## Game Resource Separation

Mini app build files have a **100MB limit** (uncompressed). Including all resources directly risks exceeding this threshold.

**Best practices:**
- Include only essential assets in the build file
- Download large resources via external storage/CDN
- Implement lazy loading for supplementary resources

## Third-Party Logging Solutions

External logging solutions are restricted. Currently approved options:

**System Logger:**
- Sentry

**Analytics Loggers:**
- Google Analytics
- Unity Analytics
- Amplitudes (WebView only)

Submit additional proposals via channel chat for internal review.

## Non-Game Mini Apps: Feature-Based Exposure

Services display as features (individual functions) within the Toss app. Each service requires **at least one feature**, with a maximum of **three**.

### What Are Features?

Function-level landing pages displayed to users, such as:
- "View today's exercise routine" → Page A
- "Log meal" → Page B
- "Check health report" → Page C

### Feature Registration

**Initial setup:** Console > App Launch > Request Review
**Ongoing management:** Console > In-App Features tab

**Requirements:**
- Input feature name and destination URL
- Base scheme: `intoss://{appName}` (with optional subpaths)
- Query parameters supported
- Granular feature-level registration
- Maximum 3 features
- Recommended naming convention: "~하기" format (verb form)

### Implementation by Environment

**WebView:**
Map router paths to feature addresses. Example: `/search` route → `intoss://{appName}/search`

**React Native (Bedrock):**
Uses file-based routing similar to Next.js. File `/pages/search.tsx` maps to `/search` path → accessible via `intoss://{appName}/search`

---
**출처**: [Apps in Toss 개발자센터](https://developers-apps-in-toss.toss.im/development/prepare.html)
