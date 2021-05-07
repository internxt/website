import cache from 'memory-cache'
interface AssetInfo {
  browser_download_url: string
}

interface LatestReleaseInfo {
  id: number
  name: string
  published_at: Date
  assets: AssetInfo[]
}

export async function getLatestReleaseInfo(user: string, repo: string) {

  const cachedData = cache.get(user + '/' + repo);

  if (cachedData) {
    cachedData.cached = true;
    return cachedData;
  }

  const fetchUrl = `https://api.github.com/repos/${user}/${repo}/releases/latest`;
  const res = await fetch(fetchUrl);

  if (res.status !== 200) {
    throw Error('Release not found');
  }

  const info: LatestReleaseInfo = await res.json();

  let windows = null;
  let linux = null;
  let macos = null;

  info.assets.forEach(asset => {

    const match = asset.browser_download_url.match(/\.(\w+)$/)

    switch (match[1]) {
      case 'exe':
        windows = asset.browser_download_url;
        break;
      case 'dmg':
        macos = asset.browser_download_url;
        break;
      case 'deb':
        linux = asset.browser_download_url;
        break;

    }
  })

  const newCachedData = {
    version: info.name,
    links: {
      windows, linux, macos
    },
    cached: false
  }

  cache.put(user + '/' + repo, newCachedData, 1000 *  60 * 5); // 5 minutes

  return newCachedData;
}
