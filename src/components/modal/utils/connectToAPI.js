export default async data => {
  const URL =
    'https://cors-anywhere.herokuapp.com/https://postman-echo.com/post';

  try {
    const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json.data;

  } catch (e) {
    console.log(e);
    return null;
  }
};