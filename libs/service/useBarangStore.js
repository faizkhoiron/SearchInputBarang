import create from "zustand";

const useBarangStore = create((set) => ({
  inputBarang: "",
  setInputBarang: (newValue) => set({ inputBarang: newValue }),
}));

export default useBarangStore;
