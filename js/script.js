const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const day = document.querySelector(".day");
const prevnexticons = document.querySelectorAll(".icons i");
// getting new date, current year current month current day
let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth(),
  currentDay = date.getDate();
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
const rendercalendar = () => {
  let lastDateoflastMonth = new Date(currentYear, currentMonth, 0).getDate(),
    lastDayofMonth = new Date(
      currentYear,
      currentMonth,
      lastDateoflastMonth
    ).getDay(),
    firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let liTag = "";



  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateoflastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  days.innerHTML = liTag;

  day.querySelector(".dayname").innerText = date.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  day.querySelector("h1").innerText = date.getDate();
};
rendercalendar();

prevnexticons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if(currentMonth < 0 || currentMonth > 11){
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear();
        currentMonth = date.getMonth();
    }else {
        date = new Date();
    }
    rendercalendar();
  });
});