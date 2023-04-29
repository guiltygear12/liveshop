import { atom, selector } from "recoil";

// interface
export interface ILogin {
    username: string;
    password: string;
}
export interface IRegister {
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number?: number;
        zipcode: string;
        geolocation?: {
            lat?: string;
            long?: string;
        };
    };
    phone: string;
}
export interface IProducts {
    id: number;
    title: string;
    price: number;
    category:
        | "electronics"
        | "jewelery"
        | "men's clothing"
        | "women's clothing";
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
export interface ICart extends IProducts {
    count: number;
}
export interface IToken {
    token: string;
}
export interface INotice {
    userId: number;
    id: number;
    title: string;
    body: string;
}
// atom
export const DarkModeState = atom({
    key: "darkmode",
    default: true,
});
export const checkToken = atom<IToken[]>({
    key: "token",
    default: [],
});
export const likelistState = atom<IProducts[]>({
    key: "likelist",
    default: [],
});
export const cartState = atom<ICart[]>({
    key: "cart",
    default: [],
});
export const productsState = atom<IProducts[]>({
    key: "products",
    default: [],
});
export const noticeState = atom<INotice[]>({
    key: "notice",
    default: [],
});
// SELECTOR
export const bestSellersState = selector({
    key: "bestSeller",
    get: ({ get }) => {
        const products = get(productsState);
        return products
            .slice()
            .sort((a, b) => b.rating.count - a.rating.count)
            .slice(0, 3);
    },
});
export const totalPriceSelector = selector({
    key: "totalPrice",
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => total + item.price * item.count, 0);
    },
});

export const productsSelector = selector({
    key: "productsSelector",
    get: ({ get }) => {
        const products = get(productsState);
        return [
            products.filter((products) => products.category === "electronics"),
            products.filter((products) => products.category === "jewelery"),
            products.filter(
                (products) => products.category === "men's clothing"
            ),
            products.filter(
                (products) => products.category === "women's clothing"
            ),
        ];
    },
});
