import { create } from "zustand";

const useMyStore = create((set) => ({
  korzina: [],
  like: [],
  hozirgiQiymat: "price",
  tartibi: true,

  savatga_qoshish: (item) =>
    set((state) => {
      const bormi = state.korzina.find((s) => s.mahsulot.id === item.id);
      if (bormi) {
        return {
          korzina: state.korzina.map((savat) =>
            savat.mahsulot.id === item.id
              ? { ...savat, count: savat.count + 1 }
              : savat
          ),
        };
      } else {
        return {
          korzina: [...state.korzina, { count: 1, mahsulot: item }],
        };
      }
    }),

  toggleLike: (item) =>
    set((state) => {
      const bor = state.like.find((l) => l.id === item.id);
      if (bor) {
        return { like: state.like.filter((l) => l.id !== item.id) };
      } else {
        return { like: [...state.like, item] };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      korzina: state.korzina.filter((item) => item.mahsulot.id !== id),
    })),

  increaseCount: (id) =>
    set((state) => ({
      korzina: state.korzina.map((item) =>
        item.mahsulot.id === id ? { ...item, count: item.count + 1 } : item
      ),
    })),

  decreaseCount: (id) =>
    set((state) => ({
      korzina: state.korzina.map((item) =>
        item.mahsulot.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
    })),
}));

export default useMyStore;
