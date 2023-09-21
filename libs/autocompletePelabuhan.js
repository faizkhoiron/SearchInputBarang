"use client";

import React, { useState, useEffect } from "react";
import useKdNegaraStore from "./service/useKdNegaraStore";
import axios from "axios";

const AutocompletePelabuhan = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { kdNegara } = useKdNegaraStore();

  useEffect(() => {
    if (inputValue.trim() === "") {
      setSuggestions([]);
      return;
    }

    axios
      .get(
        `https://insw-dev.ilcs.co.id/my/n/pelabuhan?kd_negara=${kdNegara}&ur_pelabuhan=${inputValue}`
      )
      .then((response) => {
        setSuggestions(response.data.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setSuggestions([]);
      });
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectPelabuhan = (pelabuhan) => {
    setInputValue(pelabuhan.ur_pelabuhan);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari Pelabuhan..."
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300"
      />
      <ul className="mt-2 text-black divide-y divide-black  border-white">
        {suggestions.map((pelabuhan) => (
          <li
            key={pelabuhan.kd_pelabuhan}
            onClick={() => handleSelectPelabuhan(pelabuhan)}
            className="cursor-pointer bg-white hover:bg-gray-100 p-2"
          >
            {pelabuhan.ur_pelabuhan}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompletePelabuhan;
