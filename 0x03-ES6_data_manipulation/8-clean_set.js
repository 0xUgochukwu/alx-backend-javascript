export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const len = startString.length;

  return [...set]
    .filter((el) => (
      typeof el === 'string' && el.startsWith(startString) && el.substring(len))
    )
    .map((el) => el.substring(len))
    .join('-');
}
