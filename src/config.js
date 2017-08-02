const config = {
  navbar: [
    {
      title: 'Blog',
      link: '/',
    },
    {
      title: 'News',
      link: '/news',
    },
    {
      title: 'Admin',
      link: '/admin',
    },
  ],
  filters: {
    blogFilter: [
      {
        id: 'date',
        onChange: 'setDate',
        label: 'По новизне',
        defaultChecked: true,
      },
      {
        id: 'popular',
        onChange: 'setPopular',
        label: 'По популярности',
      },
      {
        id: 'alphabet',
        onChange: 'setAlphabet',
        label: 'По алфавиту',
      },
    ],
    newsFilter: [
      {
        id: 'time',
        onChange: 'setNews',
        label: 'Time',
        defaultChecked: true,
      },
      {
        id: 'the-guardian-uk',
        onChange: 'setNews',
        label: 'The Guardian',
      },
    ],
  },
};

export default config;
