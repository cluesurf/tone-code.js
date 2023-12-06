<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@textsurf/tone-code</h3>
<p align='center'>
  Generate obscure IDs using <a href="https://github.com/textsurf/tone">Tone's</a> alphabet
</p>

<br/>
<br/>
<br/>

Generate pseudorandom keys and such for DB IDs or whatever else IDs. Not
secure, it's not supposed to be secure, just here to make it appear
non-sequential to the average person :).

```
pnpm add @textsurf/tone-code
yarn add @textsurf/tone-code
npm i @textsurf/tone-code
```

## Example

```ts
import { make4, make32 } from '@textsurf/tone-code'

console.log(make4(256n)) // => MHZL
console.log(make32(256n)) // => ZFHDWMVBWWZXKZKTFSTVFHXNWWDVVKCM
```

## License

MIT

## TextSurf

This is being developed by the folks at [TextSurf](https://text.surf), a
California-based project for helping humanity master information and
computation. TextSurf started off in the winter of 2008 as a spark of an
idea, to forming a company 10 years later in the winter of 2018, to a
seed of a project just beginning its development phases. It is entirely
bootstrapped by working full time and running
[Etsy](https://etsy.com/shop/textsurf) and
[Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also
find us on [Facebook](https://www.facebook.com/textsurf),
[Twitter](https://twitter.com/_textsurf), and
[LinkedIn](https://www.linkedin.com/company/textsurf). Check out our
other GitHub projects as well!
