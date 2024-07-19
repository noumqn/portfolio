export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I designed a chapter in',
    title: 'Murder Mystery 2',
    image: {
      src: '/static/images/field-app.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I designed puzzles in`,
    title: 'EscapeVerse Puzzle Adventure',
    image: {
      src: '/static/images/planner-app.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I designed levels in`,
    title: 'Horror Mystery',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
];
