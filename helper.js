function setCurrentDate(tag) {
  const makeTwoDigit = (num) => (String(num).length === 1 ? `0${num}` : num);
  const dateNow = new Date();
  let year = dateNow.getFullYear();
  let month = makeTwoDigit(dateNow.getMonth() + 1);
  let date = dateNow.getDate();
  let hour = dateNow.getHours();
  let minute = dateNow.getMinutes();
  let dateValue = `${year}-${month}-${date}T${hour}:${minute}`;
  tag.setAttribute("value", dateValue);
}
