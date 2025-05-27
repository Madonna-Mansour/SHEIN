import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    userInfo: null,
    favorit: [],
    searchTerm: "",
};

export const appSlice = createSlice({
    name: "shein",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },

        increment: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++;
        },

        decrement: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },

        remove: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },

        clear: (state) => {
            state.products = [];
        },

        // ✅ إضافة/إزالة من المفضلة
        favorit: (state, action) => {
            const exist = state.favorit.find((item) => item.id === action.payload.id);
            if (exist) {
                state.favorit = state.favorit.filter((item) => item.id !== action.payload.id);
            } else {
                state.favorit.push(action.payload);
            }
        },

        // ✅ حذف عنصر من المفضلة
        removeFromFavorit: (state, action) => {
            state.favorit = state.favorit.filter((item) => item.id !== action.payload);
        },

        // ✅ مسح المفضلة
        clearFavorit: (state) => {
            state.favorit = [];
        },

        setUser: (state, action) => {
            state.userInfo = action.payload;
        },

        logOut: (state) => {
            state.userInfo = null;
        },

        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
       }
    },
});

export const {
    addToCart,
    increment,
    decrement,
    remove,
    clear,
    favorit,
    removeFromFavorit,
    clearFavorit,
    setUser,
    logOut,
    setSearchTerm,
} = appSlice.actions;

export default appSlice.reducer;
