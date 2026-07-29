export type Role = {
  org: string;
  title: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    org: 'Johannes Kepler University',
    title: 'Postdoctoral Researcher, Intelligent Transport Systems',
    location: 'Linz, Austria',
    period: '04/2024 — Present',
    points: [
      'Leading development of last-mile delivery and autonomous mobility capabilities within the department.',
      'Technical lead and coordinator for the EU-funded OptiPEX project, aligning research, industry stakeholders and public transport innovation initiatives.',
      'Lecturer for “Introduction to Autonomous Vehicles”, mentoring graduate students in autonomy stacks and system integration.',
      'Applied research in machine learning for mobility and intelligent transportation systems.',
    ],
  },
  {
    org: 'DS Automotion GmbH',
    title: 'Robotics Core Software Developer',
    location: 'Linz, Austria',
    period: '09/2021 — 03/2024',
    points: [
      'Built C++ drivers and control modules for industrial mobile robots — localization, actuation and battery systems.',
      'Spearheaded hardware integration, software development and testing of the Fastbots system across its first three iterations.',
      'Implemented the core localization interface and other central components of the shipped Fastbots product.',
      'Contributed to software architecture decisions for scalable, production-grade autonomous systems.',
      'Worked across mechanical, electrical and product teams to move prototypes onto deployable robotic platforms.',
    ],
  },
  {
    org: 'Artificial Life Lab, University of Graz',
    title: 'Researcher',
    location: 'Graz, Austria',
    period: '11/2015 — 07/2021',
    points: [
      'Designed and implemented bio-inspired swarm intelligence algorithms for multi-robot systems in simulation and on physical robots.',
      'Developed embedded C/C++ software for sensing, communication and actuation modules.',
      'Ran real-world underwater robotic field deployments in the Venice lagoon, validating distributed control strategies outside the lab.',
      'Designed and implemented embedded temperature gradient systems for classrooms.',
      'Published extensively in swarm robotics, adaptive systems and collective intelligence.',
    ],
  },
  {
    org: 'Micron Semiconductor Asia Ltd.',
    title: 'Process Engineer',
    location: 'Singapore',
    period: '06/2012 — 10/2015',
    points: [
      'Process owner for four FEOL photolithography processes during a 3D NAND ramp-up.',
      'Led troubleshooting and qualification of tools using statistical process control.',
      'Served as shift-in-charge during the critical production startup phase.',
    ],
  },
  {
    org: 'Maruti Suzuki India Ltd.',
    title: 'Assistant Manager, Plant Maintenance',
    location: 'Gurgaon, India',
    period: '06/2010 — 07/2012',
    points: [
      'Reduced robotic system downtime from 7 days to 1 day by introducing offline testing and training systems.',
      'Developed a statistical analysis tool to identify chronic breakdown patterns and improve preventive maintenance planning.',
      'Led maintenance teams responsible for industrial robotic arms and plant automation systems.',
    ],
  },
];

export const education = [
  {
    school: 'Graz University of Technology (TU Graz)',
    degree: 'PhD in Computer Science',
    period: '11/2015 — 11/2019',
    note: 'Investigated a unifying paradigm to unite bio-inspired collective behaviours and validated it on real robots. Advisors: Prof. Franz Wotawa, Prof. Thomas Schmickl.',
  },
  {
    school: 'National University of Singapore (NUS)',
    degree: 'MSc in Mechatronics',
    period: '07/2012 — 06/2013',
    note: 'Major in control systems and embedded systems. GPA 4.25/5.',
  },
  {
    school: 'National Institute of Technology (NIT), Jamshedpur',
    degree: 'BTech, Electrical and Electronics Engineering',
    period: '08/2006 — 05/2010',
    note: 'Major in control systems and embedded systems. GPA 8.92/10.',
  },
];

export const skills = [
  {
    group: 'Autonomy & Navigation',
    items: ['ROS', 'ROS 2', 'NAV2', 'SLAM', 'ICP', 'NDT', 'A*', 'Hybrid A*'],
  },
  {
    group: 'Estimation & Control',
    items: ['Particle Filter', 'Kalman Filter', 'Sensor fusion', 'Motion control'],
  },
  {
    group: 'Learning & Perception',
    items: ['YOLOvX', 'CSRNet', 'Applied ML for mobility'],
  },
  {
    group: 'Simulation',
    items: ['NVIDIA Isaac', 'Gazebo'],
  },
  {
    group: 'Languages',
    items: ['C++', 'Python', 'C'],
  },
  {
    group: 'Embedded & Hardware',
    items: ['Embedded C/C++', 'FreeRTOS', 'EagleCAD', 'EtherCAT', 'CAN', 'CANopen'],
  },
  {
    group: 'Industrial Automation',
    items: ['Mitsubishi PLCs', 'Sigmatek IO', 'Kawasaki arms', 'Yaskawa arms'],
  },
];

export const languages = ['English', 'German', 'Malayalam', 'Hindi'];
