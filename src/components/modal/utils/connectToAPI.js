export default async data => {
  const URL =
    'https://cors-anywhere.herokuapp.com/https://postman-echo.com/post';

  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const json = await res.json();

  return json.data;
};