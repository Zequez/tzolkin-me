import { useState } from "react";
import cx from "classnames";
import { opacify, feminizar } from "../lib/utils";
import { colors, tones, seals, plasmas } from "../lib/tables";

const day1Date = new Date("2022-07-26");
const day1Tone = 3;
const day1Seal = 8;

const getDaySeal = (moon: number, day: number): number => {
  const days = moon * 28 + day + day1Seal;
  return days % 20;
};

const getDayTone = (moon: number, day: number): number => {
  const days = moon * 28 + day + day1Tone;
  return days % 13;
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

function addDays(date: Date, number: number): Date {
  const newDate = new Date(date);
  return new Date(newDate.setDate(newDate.getDate() + number));
}

const Calendar = ({}) => {
  const [moon, setMoon] = useState(0);
  const [day, setDay] = useState(0);
  const today = new Date();

  const nextMoon = () => {
    if (moon === 12) {
      setMoon(0);
    } else {
      setMoon(moon + 1);
    }
  };

  const prevMoon = () => {
    if (moon === 0) {
      setMoon(12);
    } else {
      setMoon(moon - 1);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="h-20 flex items-center justify-center mt-2">
        <button
          className="bg-black bg-opacity-10 h-full px-4 mr-2 rounded-r-md"
          onClick={prevMoon}
        >
          &lt;
        </button>
        <div className="grid grid-cols-13 gap-1 flex-grow h-full">
          {tones.map((tone, moonTone) => (
            <div
              className={cx(
                "flex flex-col text-xs items-center cursor-pointer justify-center whitespace-nowrap   rounded-md",
                {
                  ["bg-gray-200 text-black"]: moonTone === moon,
                  ["bg-gray-800 text-white hover:bg-gray-700"]:
                    moonTone !== moon,
                }
              )}
              onClick={() => setMoon(moonTone)}
            >
              <div>Luna</div>
              <div className="">{feminizar(tone.name)}</div>
            </div>
          ))}
        </div>
        <button
          className="bg-black bg-opacity-10 h-full px-4 ml-2 rounded-l-md"
          onClick={nextMoon}
        >
          &gt;
        </button>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex">
          <div className="w-12"></div>
          <div className="flex-grow grid grid-cols-7 gap-2 px-2 pt-2">
            {plasmas.map(({ name, color }, i) => (
              <div className="flex items-center justify-center relative">
                <div
                  className="w-16 h-16 bg-gray-500 flex items-center justify-center rounded-full z-20"
                  style={{ backgroundColor: colors[color].code }}
                >
                  <div className="uppercase font-medium text-sm text-center">
                    <img
                      src={`/radial-plasmas/${i + 1}.svg`}
                      className="h-8 inline-block"
                    />
                    <div>{name}</div>
                  </div>
                </div>
                <div
                  className="w-8 absolute bottom-0 h-1/2 z-10 bg-red-400"
                  style={{ backgroundColor: colors[color].code }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          {colors.map((color, weekNumber) => (
            <div
              className="flex"
              style={{
                backgroundColor: opacify(color.code, 0.5),
                flex: "1 1 0",
              }}
            >
              <div
                className="w-12 my-2 flex-shrink-0 flex items-center justify-center rounded-r-md"
                style={{ backgroundColor: color.code }}
              >
                <div className="transform -rotate-90 uppercase text-sm font-bold">
                  {color.name}
                </div>
              </div>

              <div className="flex-grow grid grid-cols-7 gap-2 px-2">
                {plasmas.map((plasma, weekdayNumber) => (
                  <div className="flex-grow flex justify-center relative">
                    <div
                      className="z-10 absolute w-8 h-full top-0"
                      style={{ backgroundColor: colors[plasma.color].code }}
                    ></div>
                    <DaySlot moon={moon} day={weekNumber * 7 + weekdayNumber} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DaySlot = ({ moon, day }: { moon: number; day: number }) => {
  const dayGregDate = addDays(day1Date, moon * 28 + day);
  const dayTone = getDayTone(moon, day);
  const daySeal = getDaySeal(moon, day);

  const gregYear = dayGregDate.getFullYear();
  const gregMonth = dayGregDate.getMonth() + 1;
  const gregDay = dayGregDate.getDate() + 1;

  return (
    <div className="z-20 my-2 leading-4 flex flex-grow flex-col items-center justify-center bg-white rounded-md border-solid border border-gray-300">
      <div>
        <img
          src={`/galactic-tones/${dayTone + 1}.svg`}
          className="w-8 inline-block"
        />
      </div>
      <div className="mb-2">
        <img
          src={`/solar-seals/${daySeal + 1}.svg`}
          className="w-12 inline-block"
        />
      </div>
      <div>{seals[daySeal].name}</div>
      <div className="mb-2">
        {seals[daySeal].fem
          ? feminizar(tones[dayTone].name)
          : tones[dayTone].name}
      </div>
      <div className="opacity-50">
        {gregYear}-{gregMonth}-{gregDay}
      </div>
    </div>
  );
};

export default Calendar;
