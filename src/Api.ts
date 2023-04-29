export function fetchToken(username: string, password: string) {
    return fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    }).then((response) => response.json());
}
export async function fetchToken2() {
    return fetch("https://fakestoreapi.com/auth/login").then((response) =>
        response.json()
    );
}
export async function fetchAllProducts() {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
    // .then((json) => console.log(json));
}
export async function fetchAllNotice() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json().then((json) => [...json].reverse())
    );
    // .then((json) => console.log(json));
}
