// Schema markup generation funcitons

// FAQ Data Structure generator
// Additional information: https://developers.google.com/search/docs/appearance/structured-data/faqpage

export const sm_faq = (faq) => {
  let data = `{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [`;

  faq.forEach((item, i, arr) => {
    data += `{
        "@type": "Question",
        "name": "${item.question}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "`;

    if (item.answer.length > 1) {
      item.answer.forEach((answer, i, arr) => {
        data += `<p>${answer}</p>`;
      });
    } else {
      data += `${item.answer[0]}`;
    }

    data += `"
      }}`;
    if (i + 1 < arr.length) data += ',';
  });
  data += `]}`;
  return data;
};

// Single Breadcrumb Data Structure generator
// Additional information: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

export const sm_breadcrumb = (name, url) => {
  return `{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://internxt.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "${name}",
          "item": "https://internxt.com/${url}"
        }
      ]}`;
};