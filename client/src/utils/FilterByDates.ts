//get all objects which dates of the geven attribute is within the number of dates indicated

const FilterByDates = (Arraytobeorted: any[], DateAttribute: string, Days: number) => {
  let [start, end] = getWeekDates(Days);
  const seventhDay = new Date();
  seventhDay.setDate(seventhDay.getDate() - Days);

  const filteredCustomers = Arraytobeorted.filter((d) => {
    return (
      +new Date(d[DateAttribute]).getTime() >= +start &&
      +new Date(d[DateAttribute]).getTime() < +end
    );
  });

  return filteredCustomers.length;
};

export default FilterByDates;

function getWeekDates(rangeOfDays: number) {
  let now = new Date();
  let dayOfWeek = now.getDay(); //0-6
  let numDay = now.getDate();

  let start = new Date(now); //copy
  start.setDate(numDay - (rangeOfDays - dayOfWeek));
  start.setHours(0, 0, 0, 0);

  let end = new Date(now); //copy
  end.setDate(numDay + (7 - dayOfWeek));
  end.setHours(0, 0, 0, 0);

  return [start, end];
}
