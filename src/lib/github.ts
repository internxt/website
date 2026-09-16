import cache from 'memory-cache';

export async function getLatestReleaseInfo(user: string, repo: string) {
  const cachedData = cache.get(`${user}/${repo}`);

  if (cachedData) {
    cachedData.cached = true;
    return cachedData;
  }

  const fetchUrl = `https://api.github.com/repos/${user}/${repo}/releases/latest`;
  const res = await fetch(fetchUrl);

  if (res.status !== 200) {
    throw Error('Latest release information not found');
  }

  const latestRelease = await res.json();

  let windows = null;
  let linux = null;
  let macos = null;

  const latestAssets = {
    exe: null,
    deb: null,
    dmg: null,
  };

  latestRelease.assets.forEach((asset) => {
    const match = asset.browser_download_url.match(/\.(\w+)$/);
    if (match) {
      const extension = match[1];
      if (!latestAssets[extension]) {
        latestAssets[extension] = asset.browser_download_url;
      }
    }
  });

  windows = latestAssets.exe || null;
  linux = latestAssets.deb || null;
  macos = latestAssets.dmg || null;

  const newCachedData = {
    version: latestRelease.name,
    links: {
      windows,
      linux,
      macos,
    },
    cached: false,
  };

  cache.put(`${user}/${repo}`, newCachedData, 1000 * 60 * 5); // 5 minutes

  return newCachedData;
}
