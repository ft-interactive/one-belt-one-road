import article from './article';
import flags from './flags';

export default async function() {
  const d = await article();
  const f = await flags();

  return {
    ...d,
    flags: f,
    ads: {
      site: 'special.reports',
      zone: 'silk.road'
    }
  };
}
