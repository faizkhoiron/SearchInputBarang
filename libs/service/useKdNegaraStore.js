import create from 'zustand';

const useKdNegaraStore = create((set) => ({
  kdNegara: "",
  setKdNegara: (newValue) => set({ kdNegara: newValue }),
}));

export default useKdNegaraStore;
