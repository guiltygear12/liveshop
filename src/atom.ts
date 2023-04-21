import { atom } from "recoil";

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
    id: 1;
    title: string;
    price: number;
    category:
        | "electronics"
        | "jewelery"
        | "men's clothing"
        | "women's clothing";
    description: string;
    image: string;
}
export interface IToken {
    token: string;
}
export const checkToken = atom<IToken[]>({
    key: "token",
    default: [],
});
