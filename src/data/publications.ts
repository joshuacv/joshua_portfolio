export type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  /** TODO: add DOI / arXiv / publisher links as you collect them. */
  href?: string;
};

export const publications: Publication[] = [
  {
    authors: 'Re, E. D., Certad, N., Varughese, J. C., Olaverri-Monreal, C.',
    year: '2025',
    title:
      'Evaluating pedestrian risks in shared spaces through autonomous vehicle experiments on a fixed track',
    venue: '36th IEEE Intelligent Vehicles Symposium (IV)',
  },
  {
    authors: 'Certad, N., Re, E. D., Varughese, J. C., Olaverri-Monreal, C.',
    year: '2025',
    title:
      'V2P collision warnings for distracted pedestrians: A comparative study with traditional audio alerts',
    venue: '36th IEEE Intelligent Vehicles Symposium (IV)',
  },
  {
    authors:
      'Varughese, J. C., Hornischer, H., Zahadat, P., Thenius, R., Wotawa, F., Schmickl, T.',
    year: '2020',
    title:
      'A swarm design paradigm unifying swarm behaviors using minimalistic communication',
    venue: 'Bioinspiration & Biomimetics',
  },
  {
    authors:
      'Hornischer, H., Varughese, J. C., Thenius, R., Wotawa, F., Füllsack, M., Schmickl, T.',
    year: '2020',
    title:
      'CIMAX: Collective information maximization in robotic swarms using local communication',
    venue: 'Adaptive Behavior',
  },
  {
    authors:
      'Varughese, J. C., Hornischer, H., Thenius, R., Wotawa, F., Schmickl, T.',
    year: '2019',
    title:
      'Collective event detection using bio-inspired minimalistic communication in a swarm of underwater robots',
    venue: 'The 2019 Conference on Artificial Life, (31):634–641',
  },
];

export const talks = [
  {
    year: '',
    title:
      'OptiPEX: Revolutionierung der öffentlichen Verkehrsmittel durch nutzerzentrierte Innovationen und Nachhaltigkeit',
    venue: 'Forum Verkehr: KI & Digitalisierung im Verkehr, Vienna',
  },
  {
    year: '',
    title: 'Optimizing passenger experience in public transport systems',
    venue: '11th Logistic Research Austria (LRA) Workshop, Bad Schallerbach',
  },
];

export const awards = [
  {
    year: '2019',
    title: 'Successfully incubated a startup at Science Park Graz',
    org: 'Science Park Incubator, Graz',
  },
  {
    year: '2009',
    title:
      'Best engineering design award — vehicle design, BAJA SAE all-terrain vehicle design and racing competition',
    org: 'BAJA SAE, Indore',
  },
  {
    year: '2009',
    title: 'Editor-in-chief, annual university magazine',
    org: 'NIT Jamshedpur',
  },
  {
    year: '2009',
    title: 'President of the university student council',
    org: 'NIT Jamshedpur',
  },
  {
    year: '2005',
    title: 'Gold and bronze medalist, national level athletics',
    org: 'All India Athletic Meet, Hyderabad',
  },
];
