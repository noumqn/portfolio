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
      src: '/static/images/allgames.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I designed a chapter in',
    title: 'Murder Mystery 2',
    image: {
      src: '/static/images/murdermystery.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I designed puzzles in`,
    title: 'Puzzle Adventure',
    image: {
      src: '/static/images/puzzleadventure.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I designed levels in`,
    title: 'Island Mystery',
    image: {
      src: '/static/images/islandmystery.webp',
      width: 600,
      height: 717,
    },
  },
];
