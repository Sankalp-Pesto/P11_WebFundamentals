async function getExchangeRate(currencyCode) {
  const data = await fetch("https://api.exchangerate.host/latest");
  const res = await data.json();
  if (res.success) {
    return res && res.rates[currencyCode].toFixed(4);
  } else throw null;
}
getExchangeRate("ttt")
  .then((item) => console.log(item))
  .catch((error) => console.log(error));
