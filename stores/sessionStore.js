import storageKeyValue from './storageKeyValue.js'

/**
 * Writable store based on sessionStorage
 *
 * Example usage:
 *
 * ```js
 * import { get } from 'svelte/store'
 * import { sessionStore } from 'svelte-storages'
 *
 * const store = sessionStore('dates')
 *
 * dates.set('key', value)
 * console.log(get(dates).key)
 * ```
 *
 * Or, inside component
 * ```xml
 * <p>{$dates.key}</p>
 * ```
 *
 * @param  {String}                      name    Name for storing in storage
 * @param  {Object}                      initial Initial object
 * @return {{ subscribe, set, delete }}          Writable store
 */
export default function sessionStore(name, initial) {
	return storageKeyValue(name, sessionStorage, initial)
}
