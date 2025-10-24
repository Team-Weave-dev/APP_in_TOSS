# 비게임 출시 가이드

## Overview
This guide presents essential checklists for non-game mini-app launches on the Apps in Toss platform. Failure to adhere to these requirements may result in app rejection during review.

## Prerequisites
Before app review submission, developers must complete:
- App information review
- Business authentication
- Representative manager approval

Developers must also comply with dark pattern prevention policies and mini-app branding guidelines.

## Key Requirements

### 1. Access (Bridge View)
- Bridge view displaying app name, logo, and brand color must function properly
- Choose Basic or Inverted theme based on visual tone
- Toss Login services require intro screens explaining service value
- Loading time after bridge view must not exceed 20 seconds

### 2. System Mode
- Currently, dark mode is unavailable for mini-apps
- All themes must use light mode as standard
- Navigation bar must remain fixed in light mode

### 3. Zoom/Pinch Functionality
- Gesture-based zoom/pinch is disabled by default
- Limited exceptions exist for services like maps requiring this functionality

### 4. Navigation Bar
The common top navigation bar elements cannot be customized. It includes:

| Position | Element | Status |
|----------|---------|--------|
| Left | Back button | Optional |
| Left | Brand logo + name | Required |
| Left | Home button | Optional |
| Right | Partner feature button | Optional |
| Right | More button (⋯) | Required |
| Right | Close button (X) | Required |

### 5. General Service Usage & Operation
- App age restrictions must match actual content
- Response delay to scrolling/interactions must not exceed 2 seconds
- Data must persist upon re-access
- All components must function properly
- List sorting, search, and filtering must operate correctly
- Non-functional components are prohibited
- Age-specific slang and memes are not permitted

### 6. In-App Features
- All features must function properly within the mini-app
- App scheme access must be seamless with functional back navigation

### 7. Toss Pay Integration
- Only Toss Pay is permitted for payment processing
- Request and payment amounts must match exactly
- Payment and cancellation must process correctly
- Failed payments require error messaging
- Transaction history must be accessible within the app

### 8. In-App Purchases
- Product prices displayed must match store payment windows
- Payment processing must occur without errors
- Subscription products are currently unavailable
- Failed transactions require error explanations
- Purchase history must be user-accessible
- Data must persist across device changes

### 9. Promotions
All promotional activities must comply with promotion review guidelines. The following are prohibited:
- Cash or refundable events
- Item/gift card monetization
- Speculative or gambling-type activities

### 10. Functional Messaging
Only service-critical notifications are permitted (payment confirmions, shipping updates, etc.).

### 11. In-App Advertising
- Configured ads must display properly
- Ads require pre-loading
- Audio must resume after ad completion
- App must return properly after ad dismissal
- Rewards must only grant upon ad completion

### 12. App Permissions
- Required permissions must function properly
- Permitted app use even with partial permission denial

### 13. Data & Memory Usage
- Excessive data consumption negatively impacts user experience
- Memory leaks cause device overheating and poor user experience
- Both metrics undergo verification during review

### 14. Security
Security violations may result in app rejection. Detailed rejection reasons appear via email and console notification.

---
**출처**: [Apps in Toss 개발자센터](https://developers-apps-in-toss.toss.im/checklist/app-nongame.html)
