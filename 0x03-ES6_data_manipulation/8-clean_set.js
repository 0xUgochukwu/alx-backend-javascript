export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((el) => el.startsWith(startString) && typeof el === 'string')
    .map((el) => el.slice(startString.length))
    .join('-');
}
