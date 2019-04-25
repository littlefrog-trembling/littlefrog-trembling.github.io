var quotes = [
  'Dream. I ask, "do you think I'm in trouble?" Then she says, "right now... maybe. Cosmically? Definitely." We stand there a while. She looks at me, "I'll see what I can do."'
  'was there scaffolding around the Tower of Babel?'
  'folding into the body of night'
  'a man clapping passionately. tear streams down.'
  'phantom bread'
  'fudgsicle eating boss'
  'goals: make sexy anthem.'
  'paypal $80'
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length)); 
  document.getElementById('quoteDisplay') .innerHTML = quotes[randomNumber];
}
