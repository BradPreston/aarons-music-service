import { writable } from 'svelte/store';

const storedLink = localStorage.activeNavLink;
export const activeNavLink = writable(storedLink || 'home');

activeNavLink.subscribe(val => localStorage.activeNavLink = val);