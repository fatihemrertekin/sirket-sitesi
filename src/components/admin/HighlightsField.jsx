"use client";

import { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function HighlightsField({ initialHighlights = [] }) {
  const [highlights, setHighlights] = useState(initialHighlights);

  const addHighlight = () => {
    setHighlights([...highlights, ""]);
  };

  const removeHighlight = (index) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const updateHighlight = (index, value) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
  };

  return (
    <div className="space-y-4 border-t border-slate-700 pt-4 mt-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300">Öne Çıkan Özellikler (Highlights)</label>
        <button
          type="button"
          onClick={addHighlight}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors"
        >
          <PlusIcon className="w-3 h-3" /> Ekle
        </button>
      </div>

      <input type="hidden" name="highlights" value={JSON.stringify(highlights)} />

      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            placeholder={`Özellik #${index + 1}`}
            value={highlight || ""}
            onChange={(e) => updateHighlight(index, e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm bg-slate-800 border border-slate-600 rounded text-white outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => removeHighlight(index)}
            className="text-red-400 hover:text-red-300 px-2"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
