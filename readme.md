# `@tunebond/form-code`

Generate pseudorandom keys and such for DB IDs or whatever else IDs. Not
secure, it's not supposed to be secure, just here to make it appear
non-sequential to the average person :).

```
pnpm add @tunebond/form-code
yarn add @tunebond/form-code
npm i @tunebond/form-code
```

## Example

```ts
import { make4 } from '@tunebond/form-code'

console.log(make4(256n)) // => MHZL
```
