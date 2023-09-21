import React from "react";
import AutocompleteNegara from "./autocompleteNegara";
import AutocompletePelabuhan from "./autocompletePelabuhan";
import ShowBarang from "./showBarang";
import ShowTarif from "./showTarif";
import ShowHarga from "./showHarga";

export default function ScreenPage() {
  return (
    <div className="h-max max-w-7xl mx-auto bg-[#02225a] my-6 px-12 py-12 space-y-6 rounded-md">
      <title>Soal ILCS</title>
      <img
        src="/pelindo-solusi-digital-logo-putih.png"
        alt="logo-pelindo"
        className="w-32 h-10"
      />
      <div className="flex flex-row items-center gap-6">
        <h1 className="text-2xl font-semibold mb-4 text-white">Negara</h1>
        <AutocompleteNegara />
      </div>
      <div className="flex flex-row items-center gap-6">
        <h1 className="text-2xl font-semibold mb-4 text-white">Pelabuhan</h1>
        <AutocompletePelabuhan />
      </div>
      <div className="flex flex-row items-center gap-6">
        <h1 className="text-2xl font-semibold mb-4 text-white">Barang</h1>
        <ShowBarang />
      </div>
      <div className="flex flex-row items-center gap-6">
        <h1 className="text-2xl font-semibold  text-white">Harga</h1>
        <ShowHarga />
      </div>
      <div className="flex flex-row items-center gap-6">
        <h1 className="text-2xl font-semibold text-white mt-2">
          Tarif Bea Masuk
        </h1>
        <ShowTarif />
      </div>
    </div>
  );
}
