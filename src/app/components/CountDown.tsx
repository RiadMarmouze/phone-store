"use client";
import React, { useEffect, useState } from 'react';
import { newRelease } from "../constants";

interface CountdownProps {
  storageKey: string; // Key for storing start time in localStorage
  // initialTime: string; // Initial time in "HH:MM:SS" format
}

const CountDown: React.FC<CountdownProps> = ({ storageKey }) => {
  
  function getSecondsFromTime(timeString: string): number {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }
  
  function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Use Math.floor to remove fractional seconds
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  const [time, setTime] = useState(getSecondsFromTime(newRelease.countDown));

  useEffect(() => {
    const storedStartTime = localStorage.getItem(storageKey);

    const startTime = storedStartTime ? parseInt(storedStartTime, 10) : Date.now() / 1000;
    const elapsedTime = Date.now() / 1000 - startTime;
    const remainingTime = Math.max(getSecondsFromTime(newRelease.countDown) - elapsedTime, 0);
    
    setTime(remainingTime);

    const timer = setInterval(() => {
      localStorage.setItem(storageKey, startTime.toString());
      setTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [storageKey, newRelease.countDown]);

  

  return (
    <div>
      <div className="rounded-full bg-color2 py-2 px-10 text-center">
        <p className="text-md text-color1 whitespace-nowrap">Released After</p>
        <p className="text-2xl text-color1 font-bold">{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default CountDown;
