import React from "react";
import { X, Minus } from 'lucide-react';

export default function TopBar() {
  const handleMinimize = () => {
    console.log('Minimize button clicked');
    window.electronAPI.minimizeWindow();
  }

  const handleClose = () => {
    console.log('Close button clicked');
    window.electronAPI.closeWindow();
  }

  return (
    <div>
      <div className="rounded-t-xl bg-blue-400 w-screen h-8" id="top-bar"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
      </div>
      <div id="control-buttons" className="text-stone-200 absolute right-0 top-1 flex gap-1 pe-2"
        style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black" id="minimize-button" onClick={handleMinimize}><Minus /></button>
        <button className="bg-red-400 hover:bg-red-500 text-white" id="close-button" onClick={handleClose}><X /></button>


      </div>
    </div>
  );
}