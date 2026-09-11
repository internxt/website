const downloadItem = async (filename) => {
  const response = await fetch(`/api/download/${filename}`);
  const data = await response.json();

  if (data.downloadUrl) {
    return data.downloadUrl;
  }

  return undefined;
};

export default downloadItem;
