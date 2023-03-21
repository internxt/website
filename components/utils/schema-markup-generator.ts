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
        if (i + 1 < arr.length) data += ' ';
      });
    } else {
      data += `${item.answer[0]}`;
    }

    data += `"
      }`;
    if (i + 1 < arr.length) data += ',';
  });
  data += `]}`;
  return data;
};
