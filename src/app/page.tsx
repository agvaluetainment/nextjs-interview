"use client";

import { useEffect, useState } from "react";

// This page should do the following:
// On load, get the data from the /api/seconds_now endpoint
// seconds should increase by 1 every second
// clicking reset should change it back to 0
// clicking + should increase it by 1 
// clicking getDate should make an api request to /api/seconds_to_date
// and it will return a date object in which you will console log the day

const fetchSeconds = async () => {
  const response = await fetch('/api/seconds_now');
  if (!response.ok)
    throw new Error('Failed to fetch seconds since epoch');

  const seconds = await response.json();
  return seconds.seconds;
}

export default function Home() {
  const [seconds, setSeconds] = useState("");

  const onSubmit = (event) => {
    console.log(`Submitting`);
  }

  const addSecond = () => {
    setSeconds(seconds + 1);
  }

  useEffect(() => {
    setInterval(() => {
      addSecond();
    }, 1000);
  }, [])


  useEffect(() => {
    const getSeconds = async () => {
      setSeconds(await fetchSeconds())
    }

    getSeconds();
  }, [])

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <form onSubmit={onSubmit}>
        <div className="bg-blue-400 text-white font-bold px-3 py-2 rounded-full mb-3">Seconds since EPOCH: {seconds}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={addSecond}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setSeconds("")}
        >
          Reset
        </button>
      </form>
    </main>
  );
}
