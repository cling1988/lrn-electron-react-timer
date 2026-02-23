import Timer from "@/components/timer";
import TopBar from "@/components/top-bar"
import { useState, useEffect } from "react";

export default function App() {

  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    // Listen for the 'toggle-overlay' event from the main process
    window.electronAPI.toggleOverlay((isOverlayOn: boolean) => {
      setIsOverlay(isOverlayOn);
    });
    return () => {
      // Clean up the event listener when the component unmounts
      window.electronAPI.toggleOverlay(() => {});
    }
  }, []);

  return (
    <div>
      <div className={!isOverlay? 'visible': 'invisible'}>
      <TopBar></TopBar>

      </div>
      <div className="bg-black/40 p-2 rounded-b-xl">
      <Timer isOverlay={isOverlay}></Timer>

      </div>
    </div>
  )
}
