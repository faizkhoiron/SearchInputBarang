import create from "zustand";

const useHargaStore = create((set) => ({
  harga: "",
  setHarga: (newValue) => set({ harga: newValue }),
}));

export default useHargaStore;
