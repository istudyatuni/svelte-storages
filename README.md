# Svelte storages

A bunch of Svelte's [writable store](https://svelte.dev/docs#run-time-svelte-store-writable) key-value wrappers around storages.

Currently supported storages:

- `localStorage`
- `sessionStorage`

## Installation

```bash
npm i -D svelte-storages
# or
yarn add -D svelte-storages
```

## Usage

```js
import { get } from 'svelte/store'
import { sessionStore } from 'svelte-storages'

const store = sessionStore('dates')

dates.set('key', value)

console.log(get(dates).key)
```

Or, inside component

```xml
<p>{$dates.key}</p>
```
