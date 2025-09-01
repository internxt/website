import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const RenderDescription = ({ description, fontSize }: { description: string[]; fontSize?: string }): JSX.Element => {
  useEffect(() => {
    const renderDescriptionComponent = document.querySelector('#render-description-section');
    const links = document.querySelectorAll('a');

    //Check if the link is not in the Language Box redirect
    links.forEach((link) => {
      if (renderDescriptionComponent?.contains(link)) {
        link.target = '_blank';
        link.rel = 'nofollow';
      }
    });
  }, []);

  return (
    <div id="render-description-section" className="markdown flex flex-col space-y-4">
      {description.map((item) => (
        <ReactMarkdown
          key={item}
          className={`${fontSize ? fontSize : 'text-base leading-tight lg:text-lg'} text-gray-80`}
        >
          {item}
        </ReactMarkdown>
      ))}
    </div>
  );
};

export default RenderDescription;
