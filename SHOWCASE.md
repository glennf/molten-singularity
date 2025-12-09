# Winter Wonderland Showcase

## Overview
This Next.js application features a highly aesthetic "Winter Wonderland" theme.

### Key Visual Features
- **Dynamic Snowfall**: Custom CSS and JS animation creates a layered, falling snow effect that persists across the page.
- **Glassmorphism**: Extensive use of `backdrop-blur`, semi-transparent borders, and gradients to simulate ice and glass textures.
- **Gradient Typography**: Headlines use `bg-clip-text` with cool cyan/blue gradients.
- **Interactive Hover Effects**: Cards glow and reveal details on hover (`group-hover`).

## Components
### Featured Cabin (`src/components/FeaturedCabin.tsx`)
A new component showcasing a premium "Cabin of the Month".
- **Design**: Asymmetric layout with text on the left and a large visual on the right.
- **Visuals**: Uses a deep radial gradient placeholder to simulate a night sky/cabin interior vibe.
- **Amenities Grid**: A 2x2 grid of semi-transparent glass cards showing icons and details (Temperature, Roof, Sauna, Wildlife).

## Usage
Run the development server:
```bash
npm run dev
```
Visit `http://localhost:3000` (or the port specified in terminal).

*(Note: Screen recording was attempted but local dev server connectivity issues prevented capturing the live video in this session.)*
