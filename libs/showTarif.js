"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import useBarangStore from "./service/useBarangStore";
import useHargaStore from "./service/useHargaStore";

const ShowTarif = () => {
  const [tarif, setTarif] = useState([]);
  const [total, setTotal] = useState(0); // Initialize total with 0
  const { inputBarang } = useBarangStore();
  const { harga } = useHargaStore();

  useEffect(() => {
    if (inputBarang) {
      axios
        .get(`https://insw-dev.ilcs.co.id/my/n/tarif?hs_code=${inputBarang}`)
        .then((response) => {
          if (response.data.code === "200") {
            setTarif(response.data.data);
          } else {
            console.error("API Error:", response.data.message);
            setTarif([]);
          }
        })
        .catch((error) => {
          console.error("API Error:", error);
          setTarif([]);
        });
    }
  }, [inputBarang]);

  useEffect(() => {
    if (tarif.length > 0) {
      const calculatedTotal = tarif.reduce(
        (accumulator, hargaBarang) =>
          accumulator + harga * (hargaBarang.bm / 100),
        0
      );
      const formattedTotal = calculatedTotal.toFixed(2);
      setTotal(formattedTotal);
    } else {
      setTotal("");
    }
  }, [tarif, harga]);

  return (
    <div className="flex flex-row items-center space-y-4 gap-2">
      <input
        type="number"
        placeholder="Masukkan HS Code..."
        className="hidden w-full p-2 border border-gray-300 items-center"
      />
      {!tarif ? null : (
        <>
          <div className="flex flex-row items-center gap-2">
            {tarif.map((hargaBarang, index) => (
              <li
                key={index}
                className=" bg-white hover:bg-gray-100 p-2 list-none	"
              >
                {hargaBarang.bm}
              </li>
            ))}
            <p className="text-white text-lg">%</p>
          </div>
        </>
      )}
      {!total ? null : (
        <>
          <span className="bg-white p-2 items-center">
            {new Intl.NumberFormat("en-EN", {
              style: "currency",
              currency: "IDR",
              currencyDisplay: "symbol",
              minimumSignificantDigits: 3,
            })
              .format(total)
              .replace("IDR", "")}
          </span>
        </>
      )}
    </div>
  );
};

export default ShowTarif;
