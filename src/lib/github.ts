const CACHE_TTL_SECONDS = 5 * 60;
// Cache API keys must be a full URL; this host is never fetched, it is only a
// namespace for the cache entry.
const CACHE_KEY_PREFIX = 'https://internxt-cache.invalid/github-release';

interface LatestReleaseInfo {
  version: string;
  links: {
    windows: string | null;
    linux: string | null;
    macos: string | null;
  };
  cached: boolean;
}

/**
 * The Cache API is only available inside the Workers runtime. Outside it
 * (plain `next dev`, tests) this resolves to undefined and the fetch is
 * simply not cached.
 */
function getCache(): Cache | undefined {
  try {
    return typeof caches !== 'undefined' ? (caches as unknown as { default: Cache }).default : undefined;
  } catch {
    return undefined;
  }
}

export async function getLatestReleaseInfo(user: string, repo: string): Promise<LatestReleaseInfo> {
  const cacheKey = `${CACHE_KEY_PREFIX}/${user}/${repo}`;
  const cache = getCache();

  if (cache) {
    const cachedResponse = await cache.match(cacheKey);

    if (cachedResponse) {
      const cachedData = (await cachedResponse.json()) as LatestReleaseInfo;
      cachedData.cached = true;
      return cachedData;
    }
  }

  const fetchUrl = `https://api.github.com/repos/${user}/${repo}/releases/latest`;
  const res = await fetch(fetchUrl);

  if (res.status !== 200) {
    throw Error('Latest release information not found');
  }

  const latestRelease = (await res.json()) as { name: string; assets: { browser_download_url: string }[] };

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

  const newCachedData: LatestReleaseInfo = {
    version: latestRelease.name,
    links: {
      windows: latestAssets.exe || null,
      linux: latestAssets.deb || null,
      macos: latestAssets.dmg || null,
    },
    cached: false,
  };

  if (cache) {
    await cache.put(
      cacheKey,
      new Response(JSON.stringify(newCachedData), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `max-age=${CACHE_TTL_SECONDS}`,
        },
      }),
    );
  }

  return newCachedData;
}
