import { make4, make32, formCodeHost, formHostCode } from './index.js'

console.log(make4(0n))
console.log(make4(16n))
console.log(make4(256n))
console.log('')
console.log(make32(0n))
console.log(make32(16n))
console.log(make32(256n))
console.log('')
console.log(formCodeHost(make32(256n)))
console.log(formHostCode('8519d5fa-52b2-4d62-81c7-b615d4e4e858'))
