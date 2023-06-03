/* eslint-disable @typescript-eslint/no-unsafe-return */
import move from '@lancejpollard/configured-quadratic-residue-prng.js'

/**
 * Special alphabet of flat characters according to
 * https://github.com/tunebond/tone ordering.
 */

export const ALPHABET = 'MNDBTKHSFVZXCWLR'

/**
 * Seeds for PRNG.
 */

export const J8 = 51137n
export const J12 = 14151617n

export function move12(i: bigint): bigint {
  return move(i, J12, 12) as bigint
}

export function move8(i: bigint): bigint {
  return move(i, J8, 8) as bigint
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
 * Generate "hex" character code from `n` that is `size` characters long.
 *
 * @param n
 * @returns bigint
 */

export default function makeCode(size: number, n: bigint) {
  return makeSizeList(size, n)
    .map(i => ALPHABET[i])
    .join('')
}
