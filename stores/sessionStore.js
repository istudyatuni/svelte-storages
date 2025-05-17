/** import { WritableKV } from "." */

import storageKeyValue from './storageKeyValue.js'

/**
 * Writable key-value store based on sessionStorage
 *
 * @template T
 * @param  {string}        name    Name for storing in storage
 * @param  {T}             initial Initial object
 * @return {WritableKV<T>}
 */
export default function sessionStore(name, initial) {
	return storageKeyValue(name, sessionStorage, initial)
}
