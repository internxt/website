export const config = { runtime: 'edge', regions: ['fra1'] };

export default async function handler(req: Request) {
  const started = Date.now();

  try {
    const response = await fetch('https://api.mail.tm/domains?page=1', {
      headers: { accept: 'application/json' },
    });

    const body = await response.text();

    return Response.json({
      ranIn: req.headers.get('x-vercel-id'),
      status: response.status,
      ratelimit: response.headers.get('ratelimit-policy'),
      server: response.headers.get('server'),
      bytes: body.length,
      preview: body.slice(0, 120),
      ms: Date.now() - started,
    });
  } catch (err) {
    return Response.json({
      ranIn: req.headers.get('x-vercel-id'),
      failed: true,
      reason: (err as Error).message,
      ms: Date.now() - started,
    });
  }
}
