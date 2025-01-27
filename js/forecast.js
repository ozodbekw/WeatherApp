const API__KEY = "a75262e3120c70b5840c6f8c59fd8e5a";

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
