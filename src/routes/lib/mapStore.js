import { writable } from 'svelte/store';

export const mapStore = writable(null);
export const mapStore2 = writable({});
export const weightMaxStore = writable(0); // Initialize the store with an initial value of 0
