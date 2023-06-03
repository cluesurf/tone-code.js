<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@tunebond/form-code</h3>
<p align='center'>
  Generate obscure IDs using <a href="https://github.com/tunebond/tone">Tone's</a> alphabet
</p>

<br/>
<br/>
<br/>

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
import { make4, make32 } from '@tunebond/form-code'

console.log(make4(256n)) // => MHZL
console.log(make32(256n)) // => ZFHDWMVBWWZXKZKTFSTVFHXNWWDVVKCM
```

## License

MIT

## TuneBond

This is being developed by the folks at [TuneBond](https://tune.bond), a
California-based project for helping humanity master information and
computation. TuneBond started off in the winter of 2008 as a spark of an
idea, to forming a company 10 years later in the winter of 2018, to a
seed of a project just beginning its development phases. It is entirely
bootstrapped by working full time and running
[Etsy](https://etsy.com/shop/tunebond) and
[Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also
find us on [Facebook](https://www.facebook.com/tunebond),
[Twitter](https://twitter.com/tunebond), and
[LinkedIn](https://www.linkedin.com/company/tunebond). Check out our
other GitHub projects as well!
