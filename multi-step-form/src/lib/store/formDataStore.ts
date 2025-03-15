import { writable } from "svelte/store";

export const formData = writable({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    plan_price: 0,
    is_yearly: false,
    add_ons: [],
});

