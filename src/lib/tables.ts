export type Color = {
  name: string;
  code: string;
};

export const colors: Color[] = [
  { name: "Rojo", code: "#ED114E" },
  { name: "Blanco", code: "#ffffff" },
  { name: "Azul", code: "#05A1E6" },
  { name: "Amarillo", code: "#FBC707" },
];

export type Tone = {
  name: string;
};

export const tones: Tone[] = [
  { name: "Magnético" },
  { name: "Lunar" },
  { name: "Eléctrico" },
  { name: "Auto-existente" },
  { name: "Entonado" },
  { name: "Rítmico" },
  { name: "Resonante" },
  { name: "Galáctico" },
  { name: "Solar" },
  { name: "Planetaria" },
  { name: "Espectral" },
  { name: "Cristal" },
  { name: "Cósmico" },
];

export type Seal = {
  name: string;
  color: number;
};

export const seals: Seal[] = [
  { name: "Dragón", color: 0 },
  { name: "Viento", color: 1 },
  { name: "Noche", color: 2 },
  { name: "Semilla", color: 3 },
  { name: "Serpiente", color: 0 },
  { name: "Enlazador de Mundos", color: 1 },
  { name: "Mano", color: 2 },
  { name: "Estrella", color: 3 },
  { name: "Luna", color: 0 },
  { name: "Perro", color: 1 },
  { name: "Mono", color: 2 },
  { name: "Humano", color: 3 },
  { name: "Caminante del Cielo", color: 0 },
  { name: "Mago", color: 1 },
  { name: "Águila", color: 2 },
  { name: "Guerrero", color: 3 },
  { name: "Tierra", color: 0 },
  { name: "Espejo", color: 1 },
  { name: "Tormenta", color: 2 },
  { name: "Sol", color: 3 },
];

export type Plasma = {
  name: string;
  color: number;
};

export const plasmas: Plasma[] = [
  { name: "Dali", color: 3 },
  { name: "Seli", color: 0 },
  { name: "Gama", color: 1 },
  { name: "Kali", color: 2 },
  { name: "Alfa", color: 3 },
  { name: "Limi", color: 0 },
  { name: "Silio", color: 1 },
];
