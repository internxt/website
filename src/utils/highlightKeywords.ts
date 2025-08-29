export const highlightKeywords = (text: string) => {
  const keywords = [
    'Drive',
    'Send',
    'VPN',
    'Antivirus',
    'Meet',
    'Mail',
    'Cleaner',
    'Dark Web Monitor',
    'massive 70% discount',
  ];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};
