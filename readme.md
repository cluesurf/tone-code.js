<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@termsurf/tone-code</h3>
<p align='center'>
  Generate obscure IDs using <a href="https://github.com/termsurf/tone">Tone's</a> alphabet
</p>

<br/>
<br/>
<br/>

Generate pseudorandom keys and such for DB IDs or whatever else IDs. Not
secure, it's not supposed to be secure, just here to make it appear
non-sequential to the average person :).

```
pnpm add @termsurf/tone-code
yarn add @termsurf/tone-code
npm i @termsurf/tone-code
```

## Example

```ts
import { make4, make32 } from '@termsurf/tone-code'

console.log(make4(256n)) // => MHZL
console.log(make32(256n)) // => ZFHDWMVBWWZXKZKTFSTVFHXNWWDVVKCM
```

## License

MIT

## TermSurf

This is being developed by the folks at [TermSurf](https://term.surf), a
California-based project for helping humanity master information and
computation. TermSurf started off in the winter of 2008 as a spark of an
idea, to forming a company 10 years later in the winter of 2018, to a
seed of a project just beginning its development phases. It is entirely
bootstrapped by working full time and running
[Etsy](https://etsy.com/shop/termsurf) and
[Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also
find us on [Facebook](https://www.facebook.com/termsurf),
[Twitter](https://twitter.com/termsurf), and
[LinkedIn](https://www.linkedin.com/company/termsurf). Check out our
other GitHub projects as well!
