# Svelte storages

A bunch of Svelte's [writable store](https://svelte.dev/docs#run-time-svelte-store-writable) key-value wrappers around storages.

Currently supported storages:

- `localStorage`
- `sessionStorage`

Planning:

- `indexedDB`

## Installation

```bash
npm i -D svelte-storages
# or
yarn add -D svelte-storages
```

## Usage

It's basically an object `{}` stored in the storage.

```js
// store.js
import { localStore } from 'svelte-storages'

export const dates = localStore('dates')
```

```js
import { get } from 'svelte/store'
import { dates } from './store.js'

dates.set('key', 'value')
console.log(get(dates).key) // -> value
```

Or, inside the component
```html
<script context="module">
  import { dates } from './store.js'
</script>

<p>{$dates.key}</p>
```

## API

`localStore` - wrapper around localStorage, `sessionStore` - wrapper around sessionStorage.

Parameters:

- `name` - Name for storing in storage.
- `initial` - Initial object to put in storage. Default is `{}`.
