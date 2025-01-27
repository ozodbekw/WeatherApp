// request data
const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${API__KEY}`;
  loader(true);
  const request = await fetch(base + query);
  const data = await request.json();
  loader(false);
  return data;
};

const result = getData("London").then((data) => console.log(data));
