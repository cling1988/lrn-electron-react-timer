export interface ElectronAPI {
    minimizeWindow: () => void;
    closeWindow: () => void;
    toggleOverlay: (callback: (isOverlayOn: boolean) => void) => void;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}