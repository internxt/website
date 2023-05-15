import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const currentLang = ['Español (ES)', 'Français (FR)', 'English (EN)', 'Italiano (IT)', '中国 (ZH)'];

const RenderDescription = ({ description }) => {
  useEffect(() => {
    const links = document.querySelectorAll('a');

    // Check if the link is an external link
    links.forEach((link) => {
      console.log(link.textContent);
      if (!currentLang.includes(link.textContent)) {
        link.target = '_blank';
        link.rel = 'nofollow';
      }
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
