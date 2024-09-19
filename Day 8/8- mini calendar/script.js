const date = document.getElementById("date");
const day = document.getElementById("day");
const year = document.getElementById("year");
const month = document.getElementById("month");

const today = new Date();

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesdat",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];

const months = [
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
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDay[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
