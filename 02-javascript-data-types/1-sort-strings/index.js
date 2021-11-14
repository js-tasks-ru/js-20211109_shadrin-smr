/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const options = {
    asc: {
      caseFirst: 'upper',
      direction: 1
    },
    desc: {
      caseFirst: 'lower',
      direction: -1
    }
  };
  const compare = compareStrings(options[param]);
  return [...arr].sort(compare);
}

function compareStrings({caseFirst, direction}) {
  return (a, b) => new Intl.Collator(
    ['ru', 'en'],
    {caseFirst, sensitivity: 'variant'}
  ).compare(a, b) * direction;
}
