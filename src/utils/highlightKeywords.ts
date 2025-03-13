export const highlightKeywords = (text: string) => {
  const keywords = ['Drive', 'Send', 'VPN', 'Antivirus', 'Meet', 'Mail'];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};
