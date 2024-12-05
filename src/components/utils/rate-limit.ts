const MAX_REQUESTS = 20;
const WINDOW_MS = 60 * 60 * 1000;

interface RateLimitData {
  count: number;
  startTime: number;
}

const getRateLimitData = (path: string): RateLimitData => {
  const data = localStorage.getItem(path);
  return data ? JSON.parse(data) : { count: 0, startTime: Date.now() };
};

const setRateLimitData = (path: string, data: RateLimitData) => {
  localStorage.setItem(path, JSON.stringify(data));
};

const rateLimitClientMiddleware = async (
  path: string,
  requestFunction: () => Promise<any>,
  maxRequests = MAX_REQUESTS,
  windowMs = WINDOW_MS,
) => {
  const rateLimitData = getRateLimitData(path);

  if (Date.now() - rateLimitData.startTime > windowMs) {
    rateLimitData.count = 0;
    rateLimitData.startTime = Date.now();
  }

  if (rateLimitData.count >= maxRequests) {
    throw new Error('Too Many Requests');
  }

  rateLimitData.count += 1;
  setRateLimitData(path, rateLimitData);

  return requestFunction();
};

export default rateLimitClientMiddleware;
