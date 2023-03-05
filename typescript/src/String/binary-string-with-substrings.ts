/**
 * @param {string} s | 1 <= s.length <= 1000 and s[i] is either '0' or '1'
 * @param {number} n | 1 <= n <= 10^9
 * @return {boolean}
 */
export function queryString(s = "", n = 1) {
  if (n === parseInt(s.toString(), 2)) return true;

  return false;
}
