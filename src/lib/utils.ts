import { stringify } from "querystring";

export const opacify = (color: string, opacity: number) => {
  const matched = color.match(/[a-f0-9]{2}/gi);
  if (!matched) throw Error("Invalid color");
  const [r, g, b] = matched.map((c) => parseInt(c, 16)).map(Number);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const feminizar = (text: string) => {
  return text[text.length - 1] === "o" ? text.slice(0, -1) + "a" : text;
};
