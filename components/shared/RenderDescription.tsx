import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const RenderDescription = ({ description, fontSize }: { description: string[]; fontSize?: string }) => {
  useEffect(() => {
    const links = document.querySelectorAll('a');
    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#footer');

    //Check if the link is not in the Language Box redirect
    links.forEach((link) => {
      if (!navbar.contains(link) && !footer.contains(link)) {
        link.target = '_blank';
        link.rel = 'nofollow';
      }
    });
  }, []);

  return (
    <div className="markdown flex flex-col space-y-4">
      {description.map((item, index) => (
        <ReactMarkdown key={item[index]} className={`${fontSize ? fontSize : 'text-lg'} text-gray-80`}>
          {item}
        </ReactMarkdown>
      ))}
    </div>
  );
};

export default RenderDescription;
