const Calendar = ({}) => (
    <div className="flex flex-col w-full min-h-screen">
        <div className="h-20 bg-black bg-opacity-10 flex items-center justify-center">
            Moon
        </div>
        <div className="flex-grow">
            <div>
                {["DALI", "SELI", "GAMA", "KALI", "ALFA", "LIMI", "SILIO"].map(
                    (day, i) => (
                        <div>{day}</div>
                    )
                )}
            </div>
        </div>
    </div>
);

export default Calendar;
