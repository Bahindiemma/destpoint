
/** -------------------------- persistentStore.js -------------------------- */
/** A generic persistent store according to the Svelte store contract
 *
 *  @example
 *      import { persistentWritable } from "./persistentStore";
 *      export const store = persistentWritable<object>("storeKey", {});
 *
 *      $store = { id: 1 };
 *      console.log($store.id);
 *
 */
import {browser} from "$app/env";

export const persist_store = (storeKey, initialValue) => {
    let subscriptions = []
    let storeValue

    let currentStoreString = browser && localStorage.getItem(storeKey);
    if (currentStoreString === null || currentStoreString === undefined) {
        storeValue = initialValue;
        browser && localStorage.setItem(storeKey, JSON.stringify(storeValue));
    } else {
        storeValue = browser && JSON.parse(localStorage.getItem(storeKey));
    }

    // Subscribes function and returns an unsubscribe function
    const subscribe = (subscription) => {
        subscription(storeValue);
        subscriptions = [...subscriptions, subscription];
        return () => {
            subscriptions.filter(s => s != subscription);
        };
    };

    // Sets stringified value in local storage and calls subscriptions
    const set = (value) => {
        storeValue = value;
        browser && localStorage.setItem(storeKey, JSON.stringify(value));
        subscriptions.forEach(subscription => subscription(storeValue));
    };

    // Updates store value according to input function
    const update = (update_func) => set(update_func(storeValue));
    return { subscribe, set, update };
}