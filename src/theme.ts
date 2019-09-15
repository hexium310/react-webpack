export const theme = {
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  spacing: (n: number) => n * 4,
};

export type Theme = typeof theme;
