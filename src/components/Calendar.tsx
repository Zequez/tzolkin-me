import { useState } from "react";

type Tone = {
    name: string;
};

const tones: Tone[] = [
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
    { name: "Espectr" },
    { name: "Cristal" },
    { name: "Cósmico" },
];

type Seal = {
    name: string;
};

type Plasma = {
    name: string;
};

const plasmas: Plasma[] = [
    { name: "Dali" },
    { name: "Seli" },
    { name: "Gama" },
    { name: "Kali" },
    { name: "Alfa" },
    { name: "Limo" },
    { name: "Silio" },
];

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
                <div className="flex-grow text-center">
                    Luna {tones[moon].name}
                </div>
                <button
                    className="bg-black bg-opacity-10 h-full px-4"
                    onClick={nextMoon}
                >
                    &gt;
                </button>
            </div>
            <div className="flex-grow flex flex-col">
                <div className="flex p-1">
                    {plasmas.map((plasma, i) => (
                        <div className="flex-grow flex flex-col items-center uppercase font-medium m-1 py-2 rounded-md bg-black bg-opacity-10">
                            <img
                                src={`/radial-plasmas/${i + 1}.svg`}
                                className=""
                            />
                            {plasma.name}
                        </div>
                    ))}
                </div>
                <div className="flex-grow flex flex-col p-1">
                    {[...Array(4)].map((_, week) => (
                        <div className="flex flex-grow">
                            {[...Array(7)].map((_, plasma) => (
                                <div className="flex flex-grow items-center justify-center bg-gray-400 m-1 rounded-md">
                                    {plasma}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
