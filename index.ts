/* eslint-disable @typescript-eslint/no-unsafe-return */
import move from '@lancejpollard/configured-quadratic-residue-prng.js'
import { isUuid } from 'uuidv4'

/**
 * Special CODE of flat characters according to
 * https://github.com/termsurf/tone ordering.
 */

export const CODE = 'mndbtkhsfvzxcwlr'

export const CODE_TEST = new RegExp(`^[${CODE}]{32}$`)

export const CODE_HOST = CODE.split('').reduce((m, x, i) => {
  m[x] = i.toString(16)
  return m
}, {} as Record<string, string>)

export const HOST_CODE = CODE.split('').reduce((m, x, i) => {
  m[i.toString(16)] = x
  return m
}, {} as Record<string, string>)

/**
 * Seed for 2 hex character PRNG.
 */

export const J4 = 101n

/**
 * Seed for 4 hex character PRNG.
 */

export const J8 = 51137n

/**
 * Seed for 6 hex character PRNG.
 */

export const J12 = 14151617n

/**
 * Seed for 8 hex character PRNG.
 */

export const J16 = 1111211111n

/**
 * Seed for 32 hex character PRNG.
 */

export const J64 = 23242526272829303132333435363738394041n

export function move64(i: bigint): bigint {
  return move(i, J64, 64) as bigint
}

export function move16(i: bigint): bigint {
  return move(i, J16, 16) as bigint
}

export function move12(i: bigint): bigint {
  return move(i, J12, 12) as bigint
}

export function move8(i: bigint): bigint {
  return move(i, J8, 8) as bigint
}

export function move4(i: bigint): bigint {
  return move(i, J4, 4) as bigint
}

export function makeSizeList(
  size: number,
  n: bigint,
  mod = 16n,
): Array<number> {
  let x = size / 2
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let arr: Array<number> = new Array(x).fill(0)
  let i = x - 1
  while (n) {
    arr[i] = Number(n % mod)
    n /= mod
    i--
  }
  return arr
}

/**
 * Generate 32 "hex" character code.
 *
 * @param n
 * @returns bigint
 */

export function make32(n: bigint) {
  return makeCode(64, move64(n))
}

/**
 * Generate 8 "hex" character code.
 *
 * @param n
 * @returns bigint
 */

export function make8(n: bigint) {
  return makeCode(16, move16(n))
}

/**
 * Generate 6 "hex" character code.
 *
 * @param n
 * @returns bigint
 */

export function make6(n: bigint) {
  return makeCode(12, move12(n))
}

/**
 * Generate 4 "hex" character code.
 *
 * @param n
 * @returns bigint
 */

export function make4(n: bigint) {
  return makeCode(8, move8(n))
}

/**
 * Generate 4 "hex" character code.
 *
 * @param n
 * @returns bigint
 */

export function make2(n: bigint) {
  return makeCode(4, move4(n))
}

/**
 * Generate "hex" character code from `n` that is `size` characters long.
 *
 * @param n
 * @returns bigint
 */

export default function makeCode(size: number, n: bigint) {
  return makeSizeList(size, n)
    .map(i => CODE[i])
    .join('')
}

export function formHostCode(code: string): string {
  return code.split('-').map(formCode).join('')
}

export function testHost(code: string) {
  return isUuid(code)
}

export function testCode(code: string) {
  return CODE_TEST.test(code)
}

export function formCodeHost(code: string): string {
  return (
    formHost(code.slice(0, 8)) +
    '-' +
    formHost(code.slice(8, 12)) +
    '-' +
    formHost(code.slice(12, 16)) +
    '-' +
    formHost(code.slice(16, 20)) +
    '-' +
    formHost(code.slice(20, 32))
  )
}

export function formCode(code: string) {
  return code
    .split('')
    .map(x => HOST_CODE[x])
    .join('')
}

export function formHost(code: string) {
  return code
    .split('')
    .map(x => CODE_HOST[x])
    .join('')
}
