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

let hostname;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  hostname = 'http://localhost:9000'; 
} else {
  hostname = window.location.origin; 
}

export { config, hostname };
