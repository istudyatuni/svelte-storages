import type { Readable } from 'svelte/store'

export interface WritableKV<T> extends Readable<T> {
	set(this: void, key: string, value: any): void
	delete(this: void, key: string): void
}
