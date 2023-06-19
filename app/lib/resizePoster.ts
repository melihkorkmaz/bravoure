export const resizePoster = (url: string | undefined, size: number = 1080) => {
  return url?.replace(/SX300/g, `SX${size}`);
};
