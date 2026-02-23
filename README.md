# Electron React Timer Countdown

This project showcases how to use Electron with React to create a countdown timer.

## Features

It includes the following features:

- **Custom toolbar**: Uses a custom top bar UI instead of the default OS window frame for a cleaner and branded application look.
- **Trigger event**: Sends events from the renderer process to execute timer-related actions, such as start, pause, and reset.
- **Event listener**: Listens for events across Electron processes to keep the timer state and UI synchronized.
- **Background transparent**: Supports transparent window background to create a lightweight overlay-style timer experience.
- **Shortcut key**: Provides keyboard shortcuts for quick control of the timer without relying only on mouse interactions.
