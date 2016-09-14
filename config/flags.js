const prod = process.env.NODE_ENV === 'production';

export default _ => ({ // eslint-disable-line
  prod,
  errorReporting: prod,
  analytics: prod,
  googleAnalytics: prod,
  ads: true,
  onwardjourney: false,
  shareButtons: true,
  header: true,
  footer: true,
  comments: false,
});
