export default _ => ({ // eslint-disable-line

  // link file UUID
  id: '80c6e51a-4ccf-11e6-88c5-db83e98a590a',

  // canonical URL of the published page
  // https://ig.ft.com/sites/special-reports/one-belt-one-road get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/special-reports/one-belt-one-road',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2016-09-14T05:30:00Z'),

  headline: 'One belt, one road',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'A ribbon of road, rail and energy projects to help increase trade',

  topic: {
    name: 'The New Trade Routes: Silk Road Corridor',
    url: 'http://www.ft.com/reports/new-trade-routes-silk-road-corridor',
  },

  // relatedArticle: {
  //   text: 'Related article »',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Jack Farchy' },
    { name: 'James Kynge' },
    { name: 'Chris Campbell' },
  ],


  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  onwardjourney: {

    // list (methode list) or topic
    type: '',

    // topic or list id
    id: '',

    // a heading is provided automatically if not set (peferred)
    heading: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
