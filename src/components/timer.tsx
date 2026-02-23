import React from "react";
import InputField from "./input-field";
import { Check } from "lucide-react";
import soundAlarm from "../assets/alarm.wav";

export default function Timer({ isOverlay }: { isOverlay: boolean }) {
    const [isEditing, setIsEditing] = React.useState(true);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const audio = new Audio(soundAlarm);

    React.useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive) {
            interval = setInterval(() => {
                //count down the timer and if all reach 0 then make the sound play and stop the timer
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    audio.play();
                    // setIsActive(false);
                    clearInterval(interval!);
                } else if (seconds === 0) {
                    if (minutes === 0) {
                        setHours((prev) => prev - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        setMinutes((prev) => prev - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);
        } else {
            if (interval) clearInterval(interval);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, hours, minutes, seconds]);

    return (
        <div>
            {isEditing ?
                <div className="flex justify-center">
                    <div>
                        <InputField label="Hours" value={hours} onchange={(value) => setHours(Number(value))}></InputField>
                        <InputField label="Minutes" value={minutes} onchange={(value) => setMinutes(Number(value))}></InputField>
                        <InputField label="Seconds" value={seconds} onchange={(value) => setSeconds(Number(value))}></InputField>
                        <button className="hover:bg-blue-700 bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-xl mt-1 ml-1"
                            onClick={() => { setIsEditing(false); setIsActive(true); }}
                        ><Check /></button>
                    </div>
                </div>
                :
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-green-500 text-6xl">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
                    </div>
                    <div className="text-stone-500 flex justify-center gap-2 mt-2">
                        {isActive ? (
                            <>
                                {hours === 0 && minutes === 0 && seconds === 0 ? (
                                    <button className="hover:bg-green-700 bg-green-500 text-stone-200 px-4 py-2 rounded-xl" onClick={() => { setIsActive(false); audio.pause(); audio.currentTime = 0; }}>Stop Alarm</button>
                                ) : (
                                    <button className="hover:bg-green-700 bg-green-500 text-stone-200 px-4 py-2 rounded-xl" onClick={() => setIsActive(false)}>Pause</button>
                                )

                                }
                                <button className="hover:bg-red-700 bg-red-500 text-stone-200 px-4 py-2 rounded-xl" onClick={() => { setIsActive(false); setHours(0); setMinutes(0); setSeconds(0); audio.pause(); audio.currentTime = 0; }}>Stop</button>
                            </>
                        ) : <>
                            <button className="hover:bg-green-700 bg-green-500 text-stone-200 px-4 py-2 rounded-xl" onClick={() => setIsActive(true)}>Resume</button>
                            <button className="hover:bg-yellow-700 bg-yellow-500 text-stone-200 px-4 py-2 rounded-xl" onClick={() => { setIsEditing(true); setIsActive(false); }}>Edit</button>
                        </>}
                    </div>
                </div>
            }
        </div>
    )
}