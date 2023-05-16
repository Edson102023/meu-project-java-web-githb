const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const Dolar = 5.2;
const Euro = 5.9;

const convertValue = () => {
  const imputReais = document.getElementById("ìmput-Reais").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = Document.getElementById("currenty-Value-Text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(imputReais);

  currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(imputReais / Dolar);

  currencyValueText.innerHTML = new Intl.NumberFormat("ed-DE", {
    style: "currency",
    currency: "EURO",
  }).format(imputReais / Euro);
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dolar americano") {
    currencyName.innerHTML = "Dolar amaericano";
    currencyImg.src = "./assets/Estados-unidos.png";
  }

  if (select.value === "€ EURO uniao europeia") {
    currencyName.innerHTML = "EURO uniao europeia";
    currencyImg.src = "./assets/EURO.png";
  }
  convertValue();
};

button.addEventListener("click", convertValue);
select.addEventListener("change", changeCurrency);
