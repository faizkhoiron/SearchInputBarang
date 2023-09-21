"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import useKdNegaraStore from "./service/useKdNegaraStore";

const AutocompleteNegara = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { setKdNegara } = useKdNegaraStore();

  useEffect(() => {
    if (inputValue.trim() === "") {
      setSuggestions([]);
      return;
    }

    axios
      .get(`https://insw-dev.ilcs.co.id/my/n/negara?ur_negara=${inputValue}`)
      .then((response) => {
        setSuggestions(response.data.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setSuggestions([]);
      });
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectSuggestion = (negara) => {
    setInputValue(negara.ur_negara);
    setSuggestions([]);
    setKdNegara(negara.kd_negara);
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Cari Negara..."
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300"
      />
      <ul className="mt-2 text-black divide-y divide-black  border-white">
        {suggestions.map((negara, index) => (
          <li
            key={index}
            onClick={() => handleSelectSuggestion(negara)}
            className="cursor-pointer bg-white hover:bg-gray-100 p-2"
          >
            {negara.ur_negara}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteNegara;
