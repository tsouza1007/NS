"use client";

import { useEffect, useState } from "react";

export default function JournalPage({ user }: { user: any }) {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [tag, setTag] = useState("Personal");
  const [mood, setMood] = useState("😊 Happy");

  const [dateTime, setDateTime] = useState(""); // ISO for DB
  const [displayDateTime, setDisplayDateTime] = useState(""); // pretty for UI

  useEffect(() => {
    const now = new Date();

    // ISO format for DB
    const isoFormatted = now.toISOString().slice(0, 19);
    setDateTime(isoFormatted);

    // Pretty display version
    const pretty = now.toLocaleString("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).replace(",", "");
    setDisplayDateTime(pretty);
  }, []);

  const wordCount = entry.trim().split(/\s+/).filter(Boolean).length;

  const handleSave = async () => {
    try {
      const res = await fetch("http://localhost:5002/api/save-entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description: entry,
          date: dateTime,
          tag,
          mood,
          user_id: user.id,
        }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("Error saving entry:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 max-w-4xl mx-auto w-full">
        <h1 className="text-2xl font-bold">🖊️ JournalMind</h1>
        <span className="text-sm text-gray-400">
          {displayDateTime} <span className="ml-2">🌙</span>
        </span>
      </header>

      {/* Journal Entry Box */}
      <div className="flex-grow bg-gray-900 rounded-xl p-6 max-w-4xl mx-auto w-full">
        <input
          type="text"
          placeholder="Give your entry a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-semibold bg-transparent border-b border-gray-700 mb-4 focus:outline-none placeholder-gray-500"
        />
        <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
          <div>📅 {new Date().toLocaleDateString()}</div>
          <div>⏰ {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
        </div>

        <textarea
          placeholder="Start writing your thoughts..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full h-96 resize-none bg-transparent focus:outline-none placeholder-gray-500"
        ></textarea>
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center bg-gray-950 mt-6 p-4 rounded-xl max-w-4xl mx-auto w-full flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300 transition"
          >
            💾 Save
          </button>

          <select
            className="bg-gray-800 text-white px-3 py-2 rounded"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option>Personal</option>
            <option>Work</option>
            <option>Health</option>
          </select>

          <select
            className="bg-gray-800 text-white px-3 py-2 rounded"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option>😊 Happy</option>
            <option>😔 Sad</option>
            <option>😠 Angry</option>
            <option>😌 Calm</option>
          </select>
        </div>

        <div className="text-sm text-gray-400">Words: {wordCount}</div>
      </div>
    </div>
  );
}
