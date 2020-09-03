export function convert(number) {
  const followers = number.toString();
  if (followers.length < 7 && followers.length > 3)
    return `${Math.floor(number / 1000)}K`;
  if (followers.length < 10 && followers.length >= 7)
    return `${Math.floor(number / 1000000)}M`;
}
