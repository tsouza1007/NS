"use client";

import { useEffect, useState } from "react";

export default function EraClient({ user }: { user: any }) {
  const [experience, setExperience] = useState("");
  const [reflection, setReflection] = useState("");
  const [action, setAction] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [displayDateTime, setDisplayDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setDateTime(now.toISOString().slice(0, 19));
    const pretty = now.toLocaleString("en-GB", {
      year: "numeric", month: "long", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hour12: false,
    }).replace(",", "");
    setDisplayDateTime(pretty);
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5002/api/save-era-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          experience,
          reflection,
          action,
          user_id: user.id,
          date: dateTime,
        }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("Error saving ERA entry:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col">
      <header className="flex justify-between items-center mb-6 max-w-4xl mx-auto w-full">
        <h1 className="text-2xl font-bold">🔁 ERA Journal</h1>
        <span className="text-sm text-gray-400">{displayDateTime} 🧠</span>
      </header>

      <div className="flex-grow bg-gray-900 rounded-xl p-6 max-w-4xl mx-auto w-full space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">🌟 Experience</h2>
          <textarea
            placeholder="What happened?"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full h-32 bg-transparent border-b border-gray-700 resize-none focus:outline-none placeholder-gray-500"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔍 Reflection</h2>
          <textarea
            placeholder="How did you feel? What did you learn?"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            className="w-full h-32 bg-transparent border-b border-gray-700 resize-none focus:outline-none placeholder-gray-500"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🚀 Action</h2>
          <textarea
            placeholder="What will you do next?"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full h-32 bg-transparent border-b border-gray-700 resize-none focus:outline-none placeholder-gray-500"
          />
        </section>
      </div>

      <div className="bg-gray-950 mt-6 p-4 rounded-xl max-w-4xl mx-auto w-full flex justify-between items-center">
        <button
          onClick={handleSubmit}
          className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300 transition"
        >
          💾 Save ERA Entry
        </button>
      </div>
    </div>
  );
}
