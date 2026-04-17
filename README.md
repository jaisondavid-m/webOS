# WebOS (Chikko OS)

A browser-based desktop simulation built with React, Vite, and Tailwind CSS.

This project mimics an operating system experience with draggable windows, a launcher, a taskbar, and multiple built-in apps.

## Live Experience

- Desktop-style environment with a full-screen animated video wallpaper
- Launch apps from desktop icons (double-click)
- Manage multiple windows at once
- Minimize, maximize, focus, and close windows
- Restore minimized windows from the taskbar

## Full Feature List

### Desktop and OS Shell

- App launcher panel on the desktop (left side)
- Bottom taskbar with:
	- launcher button
	- open-window buttons
	- live clock and date display
- Floating launcher menu actions:
	- About Chikko OS (placeholder item)
	- Open Settings
	- Close All Windows
- Smart window layering (focused window is always brought to front)
- Automatic staggered window position when opening multiple apps
- Empty desktop hint when no windows are open
- Custom animated cursor overlay
- Video background (`public/bg.mp4`) with subtle grid overlay

### Window Manager

- Draggable windows
- Resizable windows (minimum size constraints)
- Double-click title bar to maximize/restore
- Title-bar controls:
	- close
	- minimize
	- maximize/restore
- Per-window z-index management

### Built-In Apps

#### 1. Terminal

- Styled terminal-like UI
- Preloaded demo command output (`ls`, `whoami`, `uptime`)

#### 2. Browser

- URL/search input bar
- Press Enter or click Go to navigate
- URL detection and auto-prefix with `https://` when needed
- Search fallback via Bing for non-URL input
- Refresh button
- New tab reset button
- In-window open/close browser view state
- Embedded browsing via `iframe`

#### 3. Files

- File explorer-style tree view
- Default mock filesystem:
	- Documents folder with sample files
	- Downloads folder
	- config.json file
- Create new folders
- Create new files
- Nested folder creation inside selected folder
- Persistent storage using `localStorage` (`pc-files` key)

#### 4. Setting

- System settings dashboard (static display cards):
	- Display
	- Network
	- Sound
	- Storage

#### 5. Notes

- Notes editor with monospace writing area
- Auto-load previously saved notes
- Real-time auto-save to `localStorage` (`chikko-notes` key)
- Built-in default note template

#### 6. Flappy Bird

- Embedded external game (`https://flappybird.io/`) via `iframe`
- Auto-focus logic for keyboard play
- Space key handling support while focused/hovered

#### 7. Calculator

- Basic arithmetic operations: `+`, `-`, `*`, `/`, `%`
- Decimal support
- Clear (`C`) and backspace (`⌫`)
- Expression evaluation with result display

#### 8. Sudoku

- 9x9 Sudoku board UI
- Pre-filled puzzle cells (read-only)
- Input validation to allow only digits `1-9`
- Styled 3x3 sub-grid borders

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router DOM 7
- Lucide React + React Icons
- ESLint 9

## Project Structure

```
src/
	Components/
		AppIcon.jsx
		Browser.jsx
		Calculator.jsx
		Clock.jsx
		CustomCursor.jsx
		Files.jsx
		FlappyBird.jsx
		Notes.jsx
		Setting.jsx
		Sudoku.jsx
		Terminal.jsx
		Window.jsx
		WindowContent.jsx
	data/
		app.js
	Layout/
		App.jsx
	Pages/
		WebOSDesktop.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Deployment

This project includes GitHub Pages scripts.

```bash
npm run deploy
```

- `predeploy` runs `npm run build`
- `deploy` publishes `dist/` with `gh-pages`
- Router basename is set to `/webOS` in `src/Layout/App.jsx`

## Notes

- Notes and Files app data are persisted in browser `localStorage`.
- Browser app and Flappy Bird rely on iframe-embeddable external websites.
- Some websites may block iframe rendering due to security headers.
