export type Area = 'mobility' | 'swarm' | 'biohybrid';

export type Publication = {
  title: string;
  /** Author list, already normalised. "Varughese" is highlighted at render time. */
  authors: string;
  venue: string;
  year: string;
  area: Area;
  /** Omitted for peer-reviewed work. */
  kind?: 'preprint' | 'report';
  /** Google Scholar citation count, July 2026. */
  citations?: number;
  href?: string;
};

export const areas: { id: Area; label: string; blurb: string }[] = [
  {
    id: 'mobility',
    label: 'Autonomous mobility & intelligent transport',
    blurb:
      'Current work at JKU - Autonomous driving research, Smart public transport using AI, pedestrian safety around autonomous vehicles, V2P warning strategies, Reinforcement learning for heterogenous swarms, and machine learning for public transport.',
  },
  {
    id: 'swarm',
    label: 'Swarm robotics & collective intelligence',
    blurb:
      'Doctoral and post-doctoral work on bio-inspired collective behaviour with minimalistic communication, validated on physical and underwater robots.',
  },
  {
    id: 'biohybrid',
    label: 'Biohybrid systems & environmental monitoring',
    blurb:
      'Collaborative work using living organisms as sensing elements in robotic systems for in-field aquatic monitoring.',
  },
];

/** Sorted newest first within each area by the research page. */
export const publications: Publication[] = [
  // ── Autonomous mobility & intelligent transport ──────────────────────────
  {
    title: 'Assessing Localization Technologies for Pedestrian Collision Avoidance',
    authors: 'J. C. Varughese, J. Gorospe, N. Certad, C. Olaverri-Monreal',
    venue: 'IEEE Intelligent Vehicles Symposium (IV), Naples',
    year: '2026',
    area: 'mobility',
    href: 'https://arxiv.org/abs/2605.18295',
  },
  {
    title:
      'Optimising CSRNet with parameter-free attention mechanisms for crowd counting in public transport',
    authors: 'A. Rostamza, E. Del Re, J. C. Varughese, C. Olaverri-Monreal',
    venue: 'arXiv:2605.18349',
    year: '2026',
    area: 'mobility',
    kind: 'preprint',
    href: 'https://arxiv.org/abs/2605.18349',
  },
  {
    title:
      'Evaluating Pedestrian Risks in Shared Spaces Through Autonomous Vehicle Experiments on a Fixed Track',
    authors: 'E. Del Re, N. Certad, J. C. Varughese, C. Olaverri-Monreal',
    venue: '36th IEEE Intelligent Vehicles Symposium (IV)',
    year: '2025',
    area: 'mobility',
    citations: 1,
  },
  {
    title:
      'V2P Collision Warnings for Distracted Pedestrians: A Comparative Study with Traditional Auditory Alerts',
    authors: 'N. Certad, E. Del Re, J. C. Varughese, C. Olaverri-Monreal',
    venue: '36th IEEE Intelligent Vehicles Symposium (IV)',
    year: '2025',
    area: 'mobility',
    citations: 4,
  },
  {
    title:
      'Shadow Erosion and Nighttime Adaptability for Camera-Based Automated Driving Applications',
    authors: 'M. Sabry, G. Schroeder, J. C. Varughese, C. Olaverri-Monreal',
    venue: '36th IEEE Intelligent Vehicles Symposium (IV)',
    year: '2025',
    area: 'mobility',
    citations: 2,
  },
  {
    title:
      "Understanding Visually Impaired Tramway Passengers' Interaction with Public Transport Systems",
    authors:
      'D. Mimra, D. Kaar, N. Certad, E. Del Re, J. C. Varughese, D. Seibt, C. Olaverri-Monreal',
    venue: 'AHFE International Conference, AHFE Open Access vol. 186',
    year: '2025',
    area: 'mobility',
    citations: 2,
  },
  {
    title:
      'Machine Learning-Based Performance Evaluation of a Solar-Powered Hydrogen Fuel Cell Hybrid in a Radio-Controlled Electric Vehicle',
    authors: 'A. Aghanouri, M. Sabry, J. C. Varughese, C. Olaverri-Monreal',
    venue: 'IEEE International Conference on Vehicular Electronics and Safety (ICVES)',
    year: '2025',
    area: 'mobility',
  },
  {
    title:
      'Determinants of Public Transport Usage Frequency Among Older Adults in Four EU Countries',
    authors:
      'A. S. Lombas, A. Lucas-Alba, F. Schmalfuß, J. Kallio, J. C. Varughese, et al.',
    venue: '9th HUMANIST Virtual Centre of Excellence Conference',
    year: '2025',
    area: 'mobility',
  },
  {
    title: 'D2.1 Stakeholder analysis and needs for passenger-aware on-board services',
    authors: 'N. Certad, J. C. Varughese, E. Del Re, et al.',
    venue: 'OptiPEX - Horizon Europe project deliverable',
    year: '2023',
    area: 'mobility',
    kind: 'report',
  },

  // ── Swarm robotics & collective intelligence ─────────────────────────────
  {
    title: 'Autonome Roboterschwärme als Stabilisatoren gefährdeter Ökosysteme',
    authors:
      'M. Szopek, R. Thenius, M. Stefanec, D. Hofstadler, J. C. Varughese, M. Vogrin, et al.',
    venue: 'universi - Universitätsverlag Siegen',
    year: '2021',
    area: 'swarm',
    citations: 4,
  },
  {
    title:
      'CIMAX: Collective Information Maximization in Robotic Swarms Using Local Communication',
    authors:
      'H. Hornischer, J. C. Varughese, R. Thenius, F. Wotawa, M. Füllsack, T. Schmickl',
    venue: 'Adaptive Behavior',
    year: '2020',
    area: 'swarm',
    citations: 14,
  },
  {
    title:
      'A swarm design paradigm unifying swarm behaviors using minimalistic communication',
    authors:
      'J. C. Varughese, H. Hornischer, P. Zahadat, R. Thenius, F. Wotawa, T. Schmickl',
    venue: 'Bioinspiration & Biomimetics',
    year: '2020',
    area: 'swarm',
    citations: 14,
    href: 'https://doi.org/10.1088/1748-3190/ab6ed9',
  },
  {
    title:
      'Collective Event Detection Using Bio-inspired Minimalistic Communication in a Swarm of Underwater Robots',
    authors:
      'J. C. Varughese, H. Hornischer, R. Thenius, F. Wotawa, T. Schmickl',
    venue: 'The 2019 Conference on Artificial Life, 31:634–641',
    year: '2019',
    area: 'swarm',
    citations: 2,
    href: 'https://doi.org/10.1162/isal_a_00232',
  },
  {
    title:
      'swarmFSTaxis: Borrowing a Swarm Communication Mechanism from Fireflies and Slime Mold',
    authors: 'J. C. Varughese, R. Thenius, F. Wotawa, T. Schmickl',
    venue:
      'Complex Adaptive Systems: Views from the Physical, Natural, and Social Sciences (Springer)',
    year: '2019',
    area: 'swarm',
    citations: 5,
  },
  {
    title: 'A Model for Bio-Inspired Underwater Swarm Robotic Exploration',
    authors: 'J. C. Varughese, R. Thenius, P. Leitgeb, F. Wotawa, T. Schmickl',
    venue: 'IFAC-PapersOnLine 51(2):385–390',
    year: '2018',
    area: 'swarm',
    citations: 12,
    href: 'https://doi.org/10.1016/j.ifacol.2018.03.066',
  },
  {
    title: 'WOSPP - A Wave Oriented Swarm Programming Paradigm',
    authors: 'R. Thenius, J. C. Varughese, D. Moser, T. Schmickl',
    venue: 'IFAC-PapersOnLine 51(2):379–384',
    year: '2018',
    area: 'swarm',
    citations: 6,
    href: 'https://doi.org/10.1016/j.ifacol.2018.03.065',
  },
  {
    title:
      'Artificial plants - vascular morphogenesis controller-guided growth of braided structures',
    authors:
      'D. N. Hofstadler, J. C. Varughese, S. A. Nielsen, D. A. Leon, P. Ayres, P. Zahadat, et al.',
    venue: 'arXiv:1804.06343',
    year: '2018',
    area: 'swarm',
    kind: 'preprint',
    citations: 3,
    href: 'https://arxiv.org/abs/1804.06343',
  },
  {
    title:
      'Quantification and Analysis of the Resilience of Two Swarm Intelligent Algorithms',
    authors: 'J. C. Varughese, R. Thenius, T. Schmickl, F. Wotawa',
    venue: 'GCAI 2017 - EPiC Series in Computing, 50:148–161',
    year: '2017',
    area: 'swarm',
    citations: 13,
  },
  {
    title: 'FSTaxis Algorithm: Bio-Inspired Emergent Gradient Taxis',
    authors: 'J. C. Varughese, R. Thenius, F. Wotawa, T. Schmickl',
    venue:
      '15th International Conference on the Synthesis and Simulation of Living Systems (ALIFE), MIT Press',
    year: '2016',
    area: 'swarm',
    citations: 27,
  },
  {
    title: 'subCULTron - Cultural Development as a Tool in Underwater Robotics',
    authors:
      'R. Thenius, D. Moser, J. C. Varughese, S. Kernbach, I. Kuksin, O. Kernbach, et al.',
    venue: 'Artificial Life and Intelligent Agents Symposium (Springer)',
    year: '2016',
    area: 'swarm',
    citations: 54,
  },

  // ── Biohybrid systems & environmental monitoring ─────────────────────────
  {
    title:
      'Organisms as sensors in biohybrid entities as a novel tool for in-field aquatic monitoring',
    authors:
      'W. Rajewicz, C. Wu, D. Romano, A. Campo, F. Arvin, A. J. Casson, G. Jansen van Vuuren, C. Stefanini, J. C. Varughese, B. Lennox, S. Schönwetter-Fuchs, T. Schmickl, R. Thenius',
    venue: 'Bioinspiration & Biomimetics',
    year: '2024',
    area: 'biohybrid',
    citations: 7,
    href: 'https://doi.org/10.1088/1748-3190/ad0c5d',
  },
  {
    title: 'Lifeforms potentially useful for automated underwater monitoring systems',
    authors: 'W. Rajewicz, D. Romano, J. C. Varughese, T. Schmickl, R. Thenius',
    venue: 'Artificial Life Conference Proceedings',
    year: '2022',
    area: 'biohybrid',
    citations: 2,
  },
  {
    title:
      'Freshwater organisms potentially useful as biosensors and power-generation mediators in biohybrid robotics',
    authors:
      'D. Romano, J. C. Varughese, G. Jansen van Vuuren, A. Campo, R. Thenius, T. Schmickl',
    venue: 'Biological Cybernetics',
    year: '2021',
    area: 'biohybrid',
    citations: 19,
  },
  {
    title: 'Biohybrid entities for environmental monitoring',
    authors:
      'R. Thenius, W. Rajewicz, J. C. Varughese, S. Schönwetter-Fuchs, F. Arvin, et al.',
    venue: 'Artificial Life Conference Proceedings',
    year: '2021',
    area: 'biohybrid',
    citations: 7,
  },
];

/** Scholar profile metrics, July 2026. */
export const scholarMetrics = {
  citations: 204,
  hIndex: 7,
  i10Index: 7,
  profile: 'https://scholar.google.com/citations?user=6MvaaMsAAAAJ&hl=en',
};

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
      'Best engineering design award - vehicle design, BAJA SAE all-terrain vehicle design and racing competition',
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
