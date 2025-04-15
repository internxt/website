export const highlightKeywords = (text: string) => {
  const keywords = ['Drive', 'Send', 'VPN', 'Antivirus', 'Meet', 'Mail', 'massive 90% discount'];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};
