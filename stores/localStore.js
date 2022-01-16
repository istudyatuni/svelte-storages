import storageKeyValue from './storageKeyValue.js'

/**
 * Writable key-value store based on localStorage
 *
 * @param  {String}                      name    Name for storing in storage
 * @param  {Object}                      initial Initial object
 * @return {{ subscribe, set, delete }}          Writable store
 */
export default function localStore(name, initial) {
	return storageKeyValue(name, localStorage, initial)
}
