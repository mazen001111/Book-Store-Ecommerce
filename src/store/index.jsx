import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const setIndex = create((set) => ({
    index: false,
    indexTrue: () => set(() => ({ index: true })),
    indexFalse: () => set(() => ({ index: false }))
}))

export const user = create(persist((set) => ({
    name: "",
    FirstName: "",
    LastName: "",
    email: "",
    photo: '',
    setName: (userName) => set(() => ({ name: userName })),
    setEmail: (userEmail) => set(() => ({ email: userEmail })),
    setPhoto: (userPhoto) => set(() => ({ Photo: userPhoto })),
    setLastName: (userLastName) => set(() => ({ LastName: userLastName })),
    setFirstName: (userFirstName) => set(() => ({ FirstName: userFirstName })),

}),
    {
        name: "user"
    }
))



export const addCart = create((set) => ({
    items: [],
    total: 0,
    addCartFunction: (Product) => set((state) => {
        let products = state.items
        let index = products.findIndex((el) => (el.bookId == Product.bookId))
        if (index == -1) {
            products.push({ ...Product, qty: 1 })
            toast.success("product added to cart")
        } else {
            products[index].qty++
            toast.success("Product quantity :" + products[index].qty)
        }
        console.log(products)
        state.calcTotal()
        return { items: products }
    }),
    increment: (bookId) => set((state) => {
        let products = state.items
        let index = products.findIndex((el) => (el.bookId == bookId))
        products[index].qty++
        state.calcTotal()
        return { items: products }
    }),
    decrement: (bookId) => set((state) => {
        let products = state.items
        let index = products.findIndex((el) => (el.bookId == bookId))
        if (products[index].qty > 1) {
            products[index].qty--
        } else {
            products.splice(index, 1)
        }
        state.calcTotal()
        return { items: products }
    }),
    close: (bookId) => set((state) => {
        let products = state.items
        let index = products.findIndex((el) => (el.bookId == bookId))
        products.splice(index, 1)
        state.calcTotal()
        return { items: products }

    }),
    calcTotal: () => set((state) => {
        let Total = 0
        let products = state.items
        products.forEach((el) => {
            Total += el.price * el.qty
        });
        console.log(Total)
        return { total: Total }
    })
}))