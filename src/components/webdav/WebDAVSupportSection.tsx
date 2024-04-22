import RenderDescription from '../shared/RenderDescription';

export const WebDAVSupportSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
        <RenderDescription description={textContent.description} />
      </div>
    </section>
  );
};
