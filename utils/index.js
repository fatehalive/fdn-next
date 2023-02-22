/**
 * Fungsi untuk increment.
 * @generator
 * @returns {Object} - generator
 */
export function* counter() {
  let initial = 1
  while (true) yield initial++
}