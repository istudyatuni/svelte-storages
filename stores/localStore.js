/** import { WritableKV } from "." */

import storageKeyValue from './storageKeyValue.js'

/**
 * Writable key-value store based on localStorage
 *
 * @template T
 * @param  {string}        name    Name for storing in storage
 * @param  {T}             initial Initial object
 * @return {WritableKV<T>}
 */
export default function localStore(name, initial) {
	return storageKeyValue(name, localStorage, initial)
}
