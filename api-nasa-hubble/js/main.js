
const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1; // months from 1-12
const day     = dateObj.getUTCDate();
const year    = dateObj.getUTCFullYear();

// Using padded values, so that 2023/1/7 becomes 2023/01/07
const pMonth = month.toString().padStart(2,"0");
const pDay = day.toString().padStart(2,"0");

// Using template literals:
const newPaddedDate = `${year}-${pMonth}-${pDay}`;
let choice = document.querySelector('input').value
if(choice === '') getFetch() // if no value passed, get today
else choice = newPaddedDate
console.log('newPaddedDate'+newPaddedDate)

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=dqfKUbacyWxcvzrayCY2yOycvd8KxzjQmCTmgb82&date=${ choice }`
  console.log(choice)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

 