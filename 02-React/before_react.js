const counter = () => {
  const currentValue = document.getElementById("btn").innerHTML;
  console.log(currentValue.split(" "));

  const currentCounter = currentValue.split(" ")[1];
  const newValue = parseInt(currentCounter) + 1;

  document.getElementById("btn").innerHTML = "counter " + newValue;
};
