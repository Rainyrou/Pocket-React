const MODE = import.meta.env.MODE;

export const baseUrl =
  MODE == 'development'
    ? 'http://114.132.167.29:7009'
    : 'http://114.132.167.29:7009';
