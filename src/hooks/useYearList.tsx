import * as React from "react";

interface Props {
  listOfYears: number[];
  currentYear: number;
}

const useYearList = (): Props => {
  const [listOfYears, setListOfYears] = React.useState<number[]>([]);

  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    let years = [];

    for (let i = currentYear - 5; i <= currentYear + 5; ++i) {
      years.push(i);
    }

    setListOfYears(years);
  }, []);

  return { listOfYears, currentYear };
};

export default useYearList;
