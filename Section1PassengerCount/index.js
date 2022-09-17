// fetches the html element
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let passengerCount = 0;

function increment()
{
  console.log("button clicked");
  passengerCount += 1;
  countEl.textContent = passengerCount;
}

function save()
{
  console.log("save button clicked");
  countStr = " - " +passengerCount
  saveEl.textContent += countStr;
  passengerCount = 0;
  countEl.textContent = 0;

}

