"use client";

import { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function FeaturesField({ initialFeatures = [] }) {
  const [features, setFeatures] = useState(initialFeatures);

  const addFeature = () => {
    setFeatures([...features, { label: "", value: "" }]);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const updateFeature = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  return (
    <div className="space-y-4 border-t border-slate-700 pt-4 mt-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300">Teknik Özellikler (Features)</label>
        <button
          type="button"
          onClick={addFeature}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors"
        >
          <PlusIcon className="w-3 h-3" /> Ekle
        </button>
      </div>

      <input type="hidden" name="features" value={JSON.stringify(features)} />

      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Label (Örn: Alan)"
            value={feature.label || ""}
            onChange={(e) => updateFeature(index, "label", e.target.value)}
            className="w-1/3 px-3 py-1.5 text-sm bg-slate-800 border border-slate-600 rounded text-white outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Value (Örn: 120 m²)"
            value={feature.value || ""}
            onChange={(e) => updateFeature(index, "value", e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm bg-slate-800 border border-slate-600 rounded text-white outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => removeFeature(index)}
            className="text-red-400 hover:text-red-300 px-2"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
