import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Елегантні кросівки",
      description: "Комфортні та стильні кросівки для повсякденного носіння.",
      price: 1500,
      image:
        "https://vittoriopritti.ua/content/images/35/800x534l95nn0/77087010693146.webp",
    },
    {
      id: 2,
      name: "Шкіряний рюкзак",
      description: "Високоякісний рюкзак із натуральної шкіри для подорожей.",
      price: 3200,
      image: "https://content.rozetka.com.ua/goods/images/big/525659726.jpg",
    },
    {
      id: 3,
      name: "Смарт-годинник",
      description:
        "Модний смарт-годинник із багатьма функціями для здоров’я та спорту.",
      price: 4500,
      image: "https://content2.rozetka.com.ua/goods/images/big/470395535.jpg",
    },
    {
      id: 4,
      name: "Навушники з шумозаглушенням",
      description:
        "Бездротові навушники з активним шумозаглушенням для кращого звуку.",
      price: 2800,
      image: "https://content2.rozetka.com.ua/goods/images/big/172266668.jpg",
    },
    {
      id: 5,
      name: "Сумка через плече",
      description:
        "Стильна сумка з міцного матеріалу для щоденного використання.",
      price: 2300,
      image: "https://content.rozetka.com.ua/goods/images/big/369942839.jpg",
    },
    {
      id: 6,
      name: "Футболка з принтом",
      description: "Легка і комфортна футболка з яскравим принтом.",
      price: 700,
      image: "https://images.prom.ua/4622859702_w640_h640_4622859702.jpg",
    },
    {
      id: 7,
      name: "Класичні джинси",
      description: "Універсальні джинси, які підходять для будь-якого стилю.",
      price: 1200,
      image:
        "https://images.prom.ua/6565135392_w640_h640_molodezhnye-sinie-zhenskie.jpg",
    },
    {
      id: 8,
      name: "Окуляри сонцезахисні",
      description: "Стильні окуляри з захистом від ультрафіолету.",
      price: 900,
      image:
        "https://images.prom.ua/5702451243_zhinochi-sontsezahisni-okulyari.jpg",
    },
    {
      id: 9,
      name: "Спортивна кепка",
      description: "Кепка з дихаючого матеріалу для активного відпочинку.",
      price: 400,
      image:
        "https://images.prom.ua/5465391721_w640_h640_kepka-puma-essentials.jpg",
    },
    {
      id: 10,
      name: "Поясний ремінь",
      description: "Шкіряний ремінь класичного дизайну.",
      price: 1100,
      image:
        "https://katerinafox.ua/image/cache/catalog/products/5513/zhenskij-kozhanyj-poyasnoj-remen-kf-5513-1-1000x1000.jpg",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateProduct(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setProducts(state, action) {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setLoading(state) {
      state.status = "loading";
    },
    setError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  setProducts,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;
