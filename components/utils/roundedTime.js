export default function () {
  const currentTime = new Date();
  return new Date(Math.floor(currentTime.getTime() / 600000) * 600000);
}
