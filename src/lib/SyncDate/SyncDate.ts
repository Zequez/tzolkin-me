import { tones, seals } from "../tables";

export default class SyncDate {
  ring: number;
  moon: number;
  day: number;

  static ANCHOR: [Date, SyncDate] = [
    new Date("2022-07-26"),
    new SyncDate("35.1.1"),
  ];

  constructor(dateString: string) {
    const [r, m, d] = dateString.split(".").map((val) => parseInt(val, 10));
    if (!m || m > 13 || m < 1) throw new Error("Invalid moon");
    if (!d || d > 28 || d < 1) throw new Error("Invalid day");
    if (!r) throw new Error("Invalid year");

    this.ring = r;
    this.moon = m;
    this.day = d;
  }
}

// export const dateToSignature = (date: SyncDate):
