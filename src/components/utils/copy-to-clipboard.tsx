export default function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
