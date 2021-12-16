export default async function setUTM() {
  const domainsToDecorate = [
    'drive.internxt.com'
  ];
  const queryParams = [
    'utm_medium',
    'utm_source',
    'utm_campaign',
    'utm_id',
    'gclid',
    'irclickid',
    'ga_campaign',
    'ga_adgroup',
    'ga_keyword',
    'ga_network'
  ];
  const links = document.querySelectorAll('a');

  // check if links contain domain from the domainsToDecorate array and then decorates
  for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
    for (let domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) {
      if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf('#') === -1) {
        links[linkIndex].href = decorateUrl(links[linkIndex].href);
      }
    }
  }

  // a function that retrieves the value of a query parameter
  function getQueryParam(name) {
    const key = name;
    // var storage = window.localStorage.getItem(name)
    const storage = window.sessionStorage.getItem(name);
    const search = (new RegExp(`[?&]${encodeURIComponent(name)}=([^&]*)`)).exec(window.location.search);

    if (search ?? false) {
      // name is found in location.search
      if (search[1] !== null) {
        // window.localStorage.setItem(key, search[1])
        window.sessionStorage.setItem(key, search[1]);
        // console.log("Found '" + key + "' in url with value '" + search[1] + "' (saving in local storage)")
        return search[1];
      }
    } else if (storage) {
      // name is found in local storage
      // console.log("Found '" + key + "' in local sotrage with value '" + search[1] + "'")
      return storage;
    }
  }

  // decorates the URL with query params
  function decorateUrl(urlToDecorate) {
    urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? `${urlToDecorate}?` : `${urlToDecorate}&`;
    const collectedQueryParams = [];
    for (let queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
      if (getQueryParam(queryParams[queryIndex])) {
        collectedQueryParams.push(`${queryParams[queryIndex]}=${getQueryParam(queryParams[queryIndex])}`);
      }
    }
    return urlToDecorate + collectedQueryParams.join('&');
  }
}
