// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    minimizeWindow: () => ipcRenderer.send('minimize-window'),
    closeWindow: () => ipcRenderer.send('close-window'),
    toggleOverlay: (callback: (isOverlayOn: boolean) => void) => {
        ipcRenderer.on('toggle-overlay', (event, isOverlayOn) => {
            callback(isOverlayOn);
        });
        return () => {
            ipcRenderer.removeAllListeners('toggle-overlay');
        };
    }
});