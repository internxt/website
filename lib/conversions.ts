export default async function setUTM() {
  const domainsToDecorate = [
    'drive.internxt.com'
  ];
  const queryParams = [
    'utm_medium',
    'utm_source',
    'utm_campaign',
    'gclid'
  ];
  let links = document.querySelectorAll('a');

  // check if links contain domain from the domainsToDecorate array and then decorates
  for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
    for (let domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) {
      if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
        links[linkIndex].href = decorateUrl(links[linkIndex].href);
      }
    }
  }
  // decorates the URL with query params
  function decorateUrl(urlToDecorate) {
    urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
    let collectedQueryParams = [];
    for (let queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
      if (getQueryParam(queryParams[queryIndex])) {
        collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
      }
    }
    return urlToDecorate + collectedQueryParams.join('&');
  }
  // a function that retrieves the value of a query parameter
  function getQueryParam(name) {
    name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search);
    if (name) {
      return decodeURIComponent(name[1]);
    }
  }
}
