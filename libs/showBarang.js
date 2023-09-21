"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import useBarangStore from "./service/useBarangStore";

const ShowBarang = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { inputBarang, setInputBarang } = useBarangStore();

  useEffect(() => {
    if (inputBarang) {
      axios
        .get(`https://insw-dev.ilcs.co.id/my/n/barang?hs_code=${inputBarang}`)
        .then((response) => {
          const data = response.data.data;
          setSuggestions(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [inputBarang]);

  const handleChange = (e) => {
    setInputBarang(e.target.value);
  };

  return (
    <section>
      <div className="w-[500px]">
        <input
          type="number"
          placeholder="Masukkan HS Code..."
          value={inputBarang}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div className="">
        <ul className="mt-2 text-black divide-y divide-black  border-white">
          {suggestions.map((barang, index) => (
            <li
              key={index}
              className="cursor-pointer bg-white hover:bg-gray-100 p-2"
            >
              {barang.sub_header} - {barang.uraian_id}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShowBarang;
