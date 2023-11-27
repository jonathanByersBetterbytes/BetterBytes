//Example fetch using pokemonapi.co

let deckId = ''  // global variable
let player1Score = 0
let player2Score = 0
document.querySelector('button').addEventListener('click', drawTwo)
document.querySelector('#war').addEventListener('click', drawEight)

fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckId = data.deck_id
    localStorage.setItem('deckId' , deckId)
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });


function drawTwo(){
  let localDeckId = localStorage.getItem('deckId')
  const url = `https://www.deckofcardsapi.com/api/deck/${localDeckId}/draw/?count=2`
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    if(data.success){
      document.querySelector('#player1Card').src = data.cards[0].image
      document.querySelector('#player2Card').src = data.cards[1].image

      let player1Val = convertToNum(data.cards[0].value)  // fixes the ACE KING QUEEN AND JACK in string format
      let player2Val = convertToNum(data.cards[1].value)

      if(player1Val > player2Val){
        player1Score +=2
        document.querySelector('h1').innerText = 'Player 1 Wins'
        document.querySelector('#pl1Score').innerText = player1Score       
      }else if(player1Val < player2Val){
        player2Score +=2
        document.querySelector('h1').innerText = 'Player 2 Wins'
        document.querySelector('#pl2Score').innerText = player2Score 
      }else{
        document.querySelector('h1').innerText = 'Time for War!'
        document.querySelector('#war').style.visibility = 'visible'

      }
    }else{
      if(player1Score > player2Score){
        document.querySelector('h1').innerText = 'Out of Cards: Player 1 Wins!!'
      }else if(player1Val < player2Score){
        document.querySelector('h1').innerText = 'Out of Cards: Player 2 Wins!!'
      }
    }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
  function convertToNum(val){
    if(val === 'JACK') return 11
    else if(val === 'QUEEN') return 12
    else if(val === 'KING') return 13
    else if(val === 'ACE') return 14
    else return Number(val) 
  }

function drawEight(){
    let localDeckId = localStorage.getItem('deckId')
    const url = `https://www.deckofcardsapi.com/api/deck/${localDeckId}/draw/?count=8`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let player1Val
      let player2Val

      document.querySelector('#war').style.visibility = 'hidden'

      for(let i = 0; i < 8; i++){
        if(i === 3){
          document.querySelector('#player1Card').src = data.cards[i].image  // pick each player's fourth card
          player1Val = convertToNum(data.cards[i].value)
        }else if(i === 7){  // pick each player's fourth card
          document.querySelector('#player2Card').src = data.cards[i].image
          player2Val = convertToNum(data.cards[i].value)
        }
      }
      if(player1Val > player2Val){
        player1Score +=8
        document.querySelector('h1').innerText = 'Player 1 Wins'
        document.querySelector('#pl1Score').innerText = player1Score 
      }else if(player1Val < player2Val){
        player2Score +=8
        document.querySelector('h1').innerText = 'Player 2 Wins'
        document.querySelector('#pl2Score').innerText = player2Score
      }else{
        document.querySelector('h3').innerText = 'Time for War!'
        document.querySelector('#war').style.visibility = 'visible'
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

