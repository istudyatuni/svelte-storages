import { writable } from 'svelte/store'

/**
 * @param  {String}                      name    Name for storing in storage
 * @param  {sessionStorage|localStorage} storage Storage object
 * @param  {Object}                      initial Initial object
 * @return {{ subscribe, set, delete }}          Writable store
 */
export function storageKeyValue(name, storage, initial = {}) {
	if (![localStorage, sessionStorage].includes(storage)) {
		throw 'Incorrect storage'
	}

	const toString = (value) => JSON.stringify(value, null, 2)
	const toObject = JSON.parse

	if (storage.getItem(name) === null) {
		storage.setItem(name, toString(initial))
	}

	const saved = toObject(storage.getItem(name))

	const { subscribe, update } = writable(saved)

	return {
		subscribe,
		set: (key, value) =>
			update((data) => {
				data[key] = value
				storage.setItem(name, toString(data))
				return data
			}),
		delete: (key) =>
			update((data) => {
				delete data[key]
				storage.setItem(name, toString(data))
				return data
			}),
	}
}
