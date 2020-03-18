export default form => {
  const data = {
    name: form.name.value,
    format: form.format.value,
    email: form.email.value,
    schedule: form.schedule.value,
  };
  if (form.hour) {
    data.hour = form.hour.value;
  }
  if (form.day) {
    data.day = form.day.value;
  }
  if (form.scheduledDate) {
    data.date = form.scheduledDate.value;
  }
  
  return data;
}
