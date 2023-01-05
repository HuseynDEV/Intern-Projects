let daysList = document.querySelector(".days");
let monthName = document.querySelector(".month");
let yearName = document.querySelector(".year");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth()+1 ;
let currentDate = dt.getDate();

let monthNames = [
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


next.addEventListener("click", () => {
  if (month === 12) {
    month = 0;
    month += 1;
    year++
  } else {
    month += 1;
   

  }
  calendar();
});

prev.addEventListener("click", () => {
  if (month == 1) {
    month = 13;
    month -= 2;
    year--
  } else {
    month -= 1;
  }
  calendar();
});

const calendar = () => {
  yearName.innerHTML = year;
  monthName.innerHTML = monthNames[month - 1];
  daysList.innerHTML = "";

  daysInMonth = new Date(year, month, 0).getDate();

  dayNumber = new Date(year, month - 1, 1).getDay();

  let gaps;
  if (dayNumber === 0) {
    gaps = 7;
  } else {
    gaps = dayNumber ;
  }

  for (let i = -gaps + 1; i <= daysInMonth; i++) {
    let item = document.createElement("li");

    if (i <= 0) {
      item.innerHTML = "";
      daysList.appendChild(item);
    } else if (
      i == currentDate &&
      month == dt.getMonth() + 1 &&
      year == dt.getFullYear()
    ) {
      item.setAttribute("class", "active");
      item.innerHTML = i;
      daysList.appendChild(item);
    } else {
      item.innerHTML = i;
      daysList.appendChild(item);
    }
  }
};
