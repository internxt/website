import cookie from 'cookies';
import Analytics from 'analytics-node';

const analyticsNode = new Analytics('MjwYepo8W8FT01kQELMdOiF0pbDQr1cv');

export default function userAttribution(appContext) {
  const pages = ['/', '/exclusive-lifetime', '/lifetime'];
  const currentPage = appContext.ctx.pathname;
  const identifyPage = pages.includes(currentPage);

  if (identifyPage) {
    const cookies = new cookie(appContext.ctx.req, appContext.ctx.res);

    const anonymousId = cookies.get('ajs_anonymous_id').substr(3, 36);

    // ensure we have context
    let context;
    const { utm_source, utm_medium, utm_campaign } = appContext.ctx.query;
    if (utm_source && utm_medium[1] && utm_campaign[1]) {
      context = {
        campaign: {
          source: utm_source,
          medium: utm_medium[1],
          name: utm_campaign[1],
        },
      };
    }
    analyticsNode.identify({
      anonymousId,
      context,
    });
  }
}
