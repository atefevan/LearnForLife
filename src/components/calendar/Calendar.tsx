import { useState, useEffect, useContext } from "react";
import moment from "moment";
import "./Calendar.css";
import C_Typography from "../atoms/C_Typography";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";
import { SettingsContext } from "../../context/AppSettings";
import useYearList from "../../hooks/useYearList";
interface Props {
  start?: string;
  end?: string;
}

const Calendar = ({ start, end }: Props) => {
  const { colorscheme } = useColorScheme();
  const { listOfYears, currentYear: currYear } = useYearList();
  console.log("CURR_YEAR: ", currYear);
  const { darkMode } = useContext<any>(SettingsContext);
  const totalMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [totalYears, setTotalYears] = useState<number[]>(listOfYears);
  const [totalDates, setTotalDates] = useState<string[]>([]);
  const [totalWeekDays, setTotalWeekDays] = useState<any[]>([]);
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [currentYear, setCurrentYear] = useState<number>(currYear);
  const [currentMonth, setCurrentMonth] = useState<any>(moment().format("MM"));
  // const [currentWeekDay, setCurrentWeekDay] = useState<any>(
  //   moment().format("ddd")
  // );
  const [currentDate, setCurrentDate] = useState<any>(moment().format("DD"));

  let temp = "Sat Nov 5 2023";
  console.log("MOMENT: ", moment(temp).format("DD"));

  console.log(`S: ${start} E: ${endDate}, end: ${end}`);

  useEffect(() => {
    setStartDate(moment(start).format("DD"));
    setEndDate(moment(end).format("DD"));
  }, [start, end]);

  useEffect(() => {
    // const currentDate = moment();
    // const yearsArray = [];
    // for (let i = 0; i < 10; i++) {
    //   const nextYear = currentDate.clone().add(i, "years");
    //   yearsArray.push(nextYear.format("YYYY"));
    // }
    setTotalYears(listOfYears);
    setTotalDates(generateDatesForMonth());
  }, [listOfYears]);

  useEffect(() => {
    setTotalDates(generateDatesForMonth());
    setTotalWeekDays(getMonthWeekdays(currentYear, currentMonth));
    handleDateRange();
  }, [currentMonth, currentYear, currentDate]);
  const generateDatesForMonth = () => {
    const startDate = moment([currentYear, currentMonth - 1]);
    const endDate = startDate.clone().endOf("month");
    const dates = [];

    while (startDate.isSameOrBefore(endDate)) {
      dates.push(startDate.format("DD"));
      startDate.add(1, "day");
    }
    return dates;
  };

  const getMonthWeekdays = (year: any, month: any) => {
    const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    const weekdaysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
      const weekday = date.format("ddd");
      weekdaysArray.push(weekday);
    }

    return weekdaysArray;
  };
  const handleDateRange = () => {
    if (currentDate > endDate) {
      setEndDate(currentDate);
    } else if (currentDate < startDate) {
      setStartDate(currentDate);
    } else if (currentDate > startDate && currentDate < endDate) {
      setEndDate(currentDate);
      setStartDate(currentDate);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderWidth: 1,
          borderRadius: "5px",
        }}
      >
        <div style={{ display: "flex" }}>
          <select
            name="years"
            id="years"
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderStyle: "inset",
              outlineColor: colorscheme.text,
              border: "1px solid black",
              color: colorscheme.text,
              backgroundColor: colorscheme.transparent,
            }}
            onChange={(event) => {
              setCurrentYear(event.target.value as unknown as number);
            }}
          >
            {totalYears.map((year) => (
              <option
                value={year}
                selected={year === currentYear}
                style={{
                  textAlign: "center",
                  color: colorscheme.yellow,
                }}
              >
                {year}
              </option>
            ))}
          </select>
          <div
            className="months-row"
            style={{
              display: "flex",
              width: "100vw",
              cursor: "pointer",
            }}
          >
            {totalMonths.map((month, index) => (
              <div
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  // borderColor: "black",
                  borderWidth: "1",
                  border: "1px solid black",
                  paddingLeft: 38,
                  paddingRight: 38,
                  paddingTop: 5,
                  paddingBottom: 5,
                  marginTop:
                    month === totalMonths[currentMonth - 1] ? "2px" : "0px",
                  backgroundColor:
                    month === totalMonths[currentMonth - 1]
                      ? "#ffe4c4"
                      : darkMode === "light"
                      ? "yellow"
                      : "green",
                  borderBottomColor:
                    month === totalMonths[currentMonth - 1]
                      ? "transparent"
                      : "black",
                  color: colorscheme.text,
                }}
                onClick={() => {
                  setCurrentMonth(index + 1);
                  setTotalWeekDays(getMonthWeekdays(currentYear, currentMonth));
                }}
              >
                <text className="current-month">{month}</text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "93.7vw" }}>
          <div
            className="weekdays-row"
            style={{
              display: "flex",
              maxHeight: "100px",
              backgroundColor: "#ffe4c4",
              borderTopColor: "transparent",
            }}
          >
            {totalWeekDays.map((weekDay) => (
              <div
                style={{
                  border: ".5px solid",
                  borderTopColor: "transparent",
                  borderBottomColor: "gray",
                  borderRightColor: "gray",
                  borderLeftColor: "transparent",
                  paddingTop: 1,
                  width: "40px",
                  paddingBottom: 1,
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "center",
                  // backgroundColor:
                  //   ++index === parseInt(currentDate) ? "skyblue" : "",
                }}
              >
                <text
                  className="current-date"
                  style={{}}
                  onChange={() => console.log(weekDay)}
                  color={colorscheme.text}
                >
                  {weekDay}
                </text>
              </div>
            ))}
          </div>
          <div
            className="dates-row"
            style={{
              display: "flex",
              maxHeight: "100px",
              // width: "1500px",
              backgroundColor: "#ffe4c4",
              // justifyContent: "space-around",
              cursor: "pointer",
              // border: ".5px solid black",
              borderTopColor: "transparent",
              // padding: 2,
            }}
          >
            {totalDates.map((date) => (
              <div
                style={{
                  border: ".5px solid",
                  borderTopColor: "transparent",
                  borderBottomColor: "gray",
                  borderRightColor: "gray",
                  borderLeftColor: "transparent",
                  paddingTop: 1,
                  width: "30px",
                  paddingBottom: 1,
                  paddingLeft: 15,
                  paddingRight: 15,
                  // backgroundColor: date === currentDate ? "skyblue" : "",
                  // backgroundColor:
                  //   index + 1 === currentDate || date === currentDate
                  //     ? "skyblue"
                  //     : "",
                  backgroundColor:
                    date >= startDate && date <= endDate ? "skyblue" : "",
                }}
                onClick={() => {
                  setCurrentDate(date);

                  // handleRange(date);
                }}
              >
                <text>{date}</text>
              </div>
            ))}
          </div>
        </div>
        {/* <C_Typography
          text={new Date(
            `${currentMonth} ${currentDate}, ${currentYear}`
          ).toDateString()}
          fontSize={fontSizes.rg}
        /> */}
      </div>
    </>
  );
};

export default Calendar;
