export const opacify = (color: string, opacity: number) => {
  console.log(color.match(/[a-f0-9]{2}/gi)?.map((c) => parseInt(c, 16)));
  const matched = color.match(/[a-f0-9]{2}/gi);
  if (!matched) throw Error("Invalid color");
  const [r, g, b] = matched.map((c) => parseInt(c, 16)).map(Number);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
