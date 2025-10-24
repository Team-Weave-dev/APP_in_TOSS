# Asset Check-First Documentation

## Overview
The Asset component enables consistent display of various media assets including icons, images, videos, and Lottie animations.

## Core Structure

The Asset component consists of three parts:

**Frame**
- Provides the foundational layout structure
- Delivers consistent sizing and styling across all Asset types
- Offers preset shapes: square, rectangle, and circular

**Content**
- Houses the actual asset material (images, icons, videos, text, Lottie)
- Uses `scaleType` property to control how content fits within the frame

**Union**
- Displays supplementary information about content
- `overlap`: Indicates multiple overlapping items
- `acc` (accessory): Shows status or additional features as small elements

## Available Asset Types

The documentation provides examples of:
- **Icon**: Colored icon assets with properties like `color` and `name`
- **Image**: Image assets with `scaleType` options (e.g., "crop")
- **Lottie**: Animation assets from JSON files
- **Text**: Text-based assets within frames
- **Video**: Video assets with control options (`controls`, `autoPlay`, `loop`)

## Key Concept

"The core of the Asset component is the Frame component. Frame provides consistent layout and styling as the foundation for all Asset component types."
