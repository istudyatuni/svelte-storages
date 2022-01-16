import storageKeyValue from './storageKeyValue.js'

/**
 * Writable key-value store based on sessionStorage
 *
 * @param  {String}                      name    Name for storing in storage
 * @param  {Object}                      initial Initial object
 * @return {{ subscribe, set, delete }}          Writable store
 */
export default function sessionStore(name, initial) {
	return storageKeyValue(name, sessionStorage, initial)
}
