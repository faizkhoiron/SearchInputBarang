"use client";

import useHargaStore from "./service/useHargaStore";

const ShowHarga = () => {
  const { harga, setHarga } = useHargaStore();
  const handleChange = (e) => {
    setHarga(e.target.value);
  };

  return (
    <div className="flex flex-row gap-2">
      <input
        type="number"
        placeholder="Masukkan Harga..."
        className="w-full p-2 border border-gray-300"
        value={harga}
        onChange={handleChange}
      />
    </div>
  );
};

export default ShowHarga;
