import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const RenderDescription = ({ description }) => {
  useEffect(() => {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'nofollow');
    });
  }, []);

  return (
    <div className="markdown flex flex-col space-y-4">
      {description.map((item, index) => (
        <ReactMarkdown key={index} className="text-lg text-gray-80">
          {item}
        </ReactMarkdown>
      ))}
    </div>
  );
};

export default RenderDescription;
