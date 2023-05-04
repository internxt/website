const SelectSection = ({ textContent, itemSelected, setItemSelected }) => {
  const linkTitles = [
    {
      title: textContent.title,
    },
    {
      title: textContent.title2,
    },
    {
      title: textContent.title3,
    },
    {
      title: textContent.title4,
    },
    {
      title: textContent.title5,
    },
    {
      title: textContent.title6,
    },
    {
      title: textContent.title7,
    },
  ];

  return (
    <div className="flex w-max flex-col space-y-6 rounded-lg border border-gray-10 px-6 py-9">
      <p className="select-none text-xl font-semibold text-gray-100">{textContent.category}</p>
      <div className="flex flex-col space-y-6">
        {linkTitles.map((link) => (
          <p
            key={link.title}
            className={`cursor-pointer text-base font-medium ${
              itemSelected === link.title ? 'text-primary hover:text-primary-dark' : 'text-gray-60 hover:text-primary'
            } `}
            onClick={() => {
              setItemSelected(link.title);
            }}
          >
            {link.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectSection;
