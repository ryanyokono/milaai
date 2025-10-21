# Mila Chat Prototype v0.1

A beautiful neumorphic language-learning chat interface built with React and TailwindCSS.

## Overview

This prototype demonstrates how a soft, tactile, neumorphic design can transform the mood of a language-learning chat experience. It features "Mila," an AI language tutor, guiding users through a calm, step-by-step Japanese conversation.

## Features

- **Neumorphic Design System**: Soft shadows and tactile buttons create a gentle, approachable interface
- **Click-to-Progress**: Tap anywhere in the chat or click the Next button to reveal messages
- **Three Bubble Types**:
  - **Mila** (AI tutor): Left-aligned with avatar and raised neumorphic bubbles
  - **User**: Right-aligned with inset neumorphic bubbles
  - **Tips**: Centered glowing cards with learning insights
- **Smooth Animations**: Fade-in effects, typing indicators, and auto-scroll
- **Progress Tracking**: Visual progress bar shows conversation completion
- **Interactive Elements**: Neumorphic buttons with press-in animations

## Tech Stack

- **React 18**: Component-based UI
- **Vite**: Fast development and building
- **TailwindCSS**: Utility-first styling with custom neumorphic shadows
- **Inter Font**: Clean, modern typography

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx           # Main app with conversation state management
├── Header.jsx        # Header with back/menu buttons and progress bar
├── ChatBubble.jsx    # Reusable bubble component for Mila/User/Tip messages
├── BottomBar.jsx     # Fixed bottom bar with mic, input, and next button
├── index.css         # Tailwind setup and custom animations
└── main.jsx          # Entry point
```

## Design System

### Colors

- Background: `#F7F8FA`
- Primary Gradient: `#6C63FF` → `#A28BFE`
- Text: Gray scale for hierarchy

### Neumorphic Shadows

```css
/* Raised elements (Mila bubbles, buttons) */
shadow-neumorph: 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff

/* Inset elements (User bubbles, text input) */
shadow-neumorph-inset: inset 4px 4px 10px #d1d9e6, inset -4px -4px 10px #ffffff

/* Glowing elements (Tip cards) */
shadow-neumorph-glow: 0 0 20px rgba(108, 99, 255, 0.3), shadows...
```

## Conversation Flow

The prototype includes a mock conversation about planning a trip to Shibuya:

1. Mila asks where you want to go
2. User responds with Shibuya
3. Tip provides encouragement and learning insight
4. Mila asks what you want to do there
5. User responds with shopping
6. Final tip reinforces the learning

All conversation data is static and defined in `App.jsx`.

## Customization

### Adding Messages

Edit the `messages` array in `src/App.jsx`:

```javascript
{
  type: "mila" | "user" | "tip",
  jp: "Japanese text",      // For mila/user
  en: "English translation", // For mila/user
  text: "Tip content",       // For tip
  buttons: ["Button 1", "Button 2"] // Optional
}
```

### Styling

Modify `tailwind.config.js` to adjust colors, shadows, or add new utilities.

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Real voice playback with audio controls
- [ ] Actual speech recognition for user input
- [ ] Backend integration with AI language model
- [ ] Multiple lesson scenarios
- [ ] User progress persistence

## License

MIT

## Credits

Built with React, TailwindCSS, and Vite.
