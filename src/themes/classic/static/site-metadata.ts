interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Noah Wang Running',
  siteUrl: 'https://www.strava.com/athletes/126815351',
  logo: `${getBasePath()}/images/avatar.jpg`,
  description: 'Noah Wang running page',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
  ],
};

export default data;
