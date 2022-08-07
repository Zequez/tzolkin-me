import { useState } from "react";
import { opacify } from "../lib/utils";
import { colors, tones, plasmas } from "../lib/tables";

const Calendar = ({}) => {
  const [moon, setMoon] = useState(1);

  const nextMoon = () => {
    if (moon === 12) {
      setMoon(1);
    } else {
      setMoon(moon + 1);
    }
  };

  const prevMoon = () => {
    if (moon === 1) {
      setMoon(12);
    } else {
      setMoon(moon - 1);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="h-20 bg-black bg-opacity-10 flex items-center justify-center">
        <button
          className="bg-black bg-opacity-10 h-full px-4"
          onClick={prevMoon}
        >
          &lt;
        </button>
        <div className="flex-grow text-center">Luna {tones[moon].name}</div>
        <button
          className="bg-black bg-opacity-10 h-full px-4"
          onClick={nextMoon}
        >
          &gt;
        </button>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex">
          <div className="w-12"></div>
          <div className="flex-grow grid grid-cols-7 gap-2 p-2">
            {plasmas.map(({ name, color }, i) => (
              <div
                className="flex flex-col items-center uppercase font-medium py-2 rounded-md bg-opacity-10"
                style={{ backgroundColor: colors[color].code }}
              >
                <img src={`/radial-plasmas/${i + 1}.svg`} className="h-10" />
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-grow">
          <div className="w-12 flex flex-col">
            {colors.map((color, i) => (
              <div
                style={{ backgroundColor: color.code }}
                className="flex-grow mb-2 flex items-center justify-center"
              >
                <div
                  className="transform -rotate-90 uppercase text-sm font-bold"
                  style={{ backgroundColor: opacify(color.code, 0.5) }}
                >
                  {color.name}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-grow flex flex-col">
            {colors.map((color, weekNumber) => (
              <div
                className="flex-grow grid grid-cols-7 gap-2 px-2 mb-2"
                style={{ backgroundColor: opacify(color.code, 1) }}
              >
                {plasmas.map((plasma, weekdayNumber) => (
                  <div
                    className="flex flex-grow items-center justify-center bg-white bg-opacity-75 rounded-md border-solid border-t-4 border-l-4"
                    style={{
                      borderTopColor: colors[plasma.color].code,
                      borderLeftColor: color.code,
                      //   backgroundColor: opacify(color.code, 0.25),
                    }}
                  >
                    {weekdayNumber}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
