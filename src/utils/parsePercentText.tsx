export const parsePercentText = (text: string, percentOff?: string) => {
  if (percentOff === undefined || !/{{(percentage|discount)}}/.test(text)) return text;
  if (!percentOff || percentOff === '0') return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
  return text.replaceAll('{{percentage}}', percentOff).replaceAll('{{discount}}', percentOff);
};
