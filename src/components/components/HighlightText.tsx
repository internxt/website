export const HighlightText = ({ text, className = '' }) => {
  const parts = text.split(/(\*\*.*?\*\*)/);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={`highlight-${part}-${index}`} className="text-primary">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={`text-${part}-${index}`}>{part}</span>;
      })}
    </span>
  );
};
