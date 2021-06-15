function setCurrentDate(tag) {
  const makeTwoDigit = (num) => (String(num).length === 1 ? `0${num}` : num);
  const dateNow = new Date();
  let year = dateNow.getFullYear();
  let month = makeTwoDigit(dateNow.getMonth() + 1);
  let date = makeTwoDigit(dateNow.getDate());
  let hour = makeTwoDigit(dateNow.getHours());
  let minute = makeTwoDigit(dateNow.getMinutes());
  let dateValue = `${year}-${month}-${date}T${hour}:${minute}`;
  tag.setAttribute("value", dateValue);
}
