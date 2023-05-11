import ReactMarkdown from 'react-markdown';

const RenderDescription = ({ description }) => {
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
