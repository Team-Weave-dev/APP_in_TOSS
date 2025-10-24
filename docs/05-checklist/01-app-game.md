# 게임 출시 가이드

## Overview

This guide provides essential requirements for game mini-app launches. Non-compliance may result in rejection during app review. Developers must complete app info review, business verification, and representative manager approval before submission.

## Key Prerequisites

- Complete app information review, business authentication, and representative manager approval first
- Adhere to dark pattern prevention policies and mini-app branding guidelines
- Ensure content contains no illegal or explicit material
- Avoid directing users to company apps or external websites

## 1. Access (Bridge View)

The bridge view is the initial screen users encounter when selecting a mini-app in Toss.

- Display app name, logo, and primary color correctly
- Recommend "Inverted" (dark mode) setting for games
- Provide intro screens before login to explain service value
- Avoid excessive loading (over 20 seconds)
- Verify Game Center functionality if implemented
- **Display age rating requirements**: All-ages for 3+ seconds; restricted ratings display for 3+ seconds plus 1/4 screen explanation with content information

## 2. System Mode

Currently, dark mode is not supported. Design all mini-app themes using **light mode only**.

## 3. Sound

Sound implementation (background audio, effects, haptics) is optional but recommended.

- Enable users to toggle background and effect audio on/off
- Respect device silent mode and vibration settings
- Stop sound during background transitions; resume properly upon return
- Only continue audio in background when functionally necessary (e.g., spot-the-difference games)

## 4. Zoom/Pinch

Gesture-based zoom functionality is disabled by default to protect user experience. Enable only when functionally essential (such as in spot-the-difference games).

## 5. Navigation Bar

A mandatory common navigation bar appears at the top.

- **Right side**: More button (⋯) and close button (X) are fixed and non-customizable
- Avoid SafeArea violation (including iOS Dynamic Island)
- Prevent UI distortion in top margin areas
- **Termination confirmation modal required**: Text: "[Service name] 종료할까요?" with Cancel/Exit buttons in brand color

## 6. General Service Usage and Operation

- Verify age rating matches service content
- Confirm portrait/landscape mode functions correctly
- Test smooth scrolling and interactions (avoid 2+ second delays)
- Verify all component functionality
- Prevent exit via left swipe or Android back button
- Test core game features (scoring, stage completion) thoroughly
- Confirm data persistence across device changes and app reinstallation
- Verify proper functionality after viewing 3+ advertisements
- Ensure no progression-blocking bugs exist

## 7. Game Profile & Leaderboard

If implemented:

- Avoid calling leaderboard before profile creation
- Verify leaderboard displays correctly
- Confirm scores reflect in real-time post-gameplay

## 8. Toss Login

If implemented:

- Test terms and conditions linking
- Verify login proceeds correctly after consent
- Confirm "Agree and Start" triggers proper login flow without failure
- Ensure closing the login screen returns to main menu
- Test disconnect functionality through Toss settings
- Note: Only Toss Login is permitted; company or third-party login prohibited

## 9. Promotions

Refer to promotion review guidelines. Prohibited activities include cash-out events, item/coupon monetization, and gambling-style mechanics.

## 10. In-App Purchase

If implemented:

- Pause background music during purchase flow
- Verify displayed prices match App Store/Google Play amounts
- Test successful completion and proper cancellation
- Display clear error messages for failed transactions
- Provide purchase history visibility
- Confirm purchase data persists across devices
- Note: Subscription products not currently supported

## 11. Friend Invitations & Rewards

- Verify configured rewards display properly
- Ensure users return to mini-app if they decline invitation
- Confirm referrer receives rewards upon successful invitation
- Hide invitation screens when no eligible friends remain

## 12. In-App Ads

- Ensure configured ads display correctly
- Preload ads in advance
- Resume background music after ad completion
- Return to mini-app properly after ad termination
- For rewarded ads: Grant rewards only upon completion

## 13. App Permissions

- Confirm required permissions function and work correctly
- Ensure app operates normally when users deny optional permissions

## 14. Data and Memory Usage

Monitor excessive data consumption and memory leaks, as these negatively impact user experience and device performance. The review process checks both metrics.

## 15. Security

Security violations result in app review rejection. Detailed rejection reasons appear via email and console.

---
**출처**: [Apps in Toss 개발자센터](https://developers-apps-in-toss.toss.im/checklist/app-game.html)
