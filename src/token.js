export const colors = {
  blue: '#4390FF',
  red: '#FF4646',
  yellow: '#FFF246'
};

export const fonts = {
  questrial: {
    family: 'Questrial'
  }
};

export const mq = [['phone', 500], ['tablet', 768], ['desktop', 1200]].reduce(
  (acc, [name, size]) => {
    acc[name] = `only screen and (min-width: ${size}px)`;
    return acc;
  },
  {}
);
