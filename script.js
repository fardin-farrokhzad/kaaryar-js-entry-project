
function themeChanger() {
  const currentHour = new Date().getHours();
  const body = document.body;
  if (currentHour >= 6 && currentHour < 18) {
    body.classList.add('day-theme');
    body.classList.remove('night-theme');
  } else {
    body.classList.add('night-theme');
    body.classList.remove('day-theme');
  }
}
themeChanger();
