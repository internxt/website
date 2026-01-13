import React, { ElementType } from 'react';

interface HighlightTextProps {
  text: string;
  className?: string;
  TitleTag?: ElementType;
}

export const HighlightText: React.FC<HighlightTextProps> = ({ text, className = '', TitleTag: Tag = 'span' }) => {
  const parts = text.split(/(\*\*.*?\*\*)/);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <Tag key={`highlight-${index}`} className="text-primary">
              {part.slice(2, -2)}
            </Tag>
          );
        }
        return <span key={`text-${index}`}>{part}</span>;
      })}
    </span>
  );
};
