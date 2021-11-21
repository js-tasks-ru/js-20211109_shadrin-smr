/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof size !== 'number') return string;

  let count = 0;
  return string
    .split("")
    .reduce(
      (prev, curr) => {
        if (prev[prev.length - 1] === curr) {
          count++;
        } else {
          count = 0;
        }

        if (count < size) {
          prev = prev.concat(curr);
        }

        return prev;
      },
      ""
    );
}
