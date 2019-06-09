var quotes = [
  'Dream. I ask, "do you think Im in trouble?"" Then she says, "right now, ...maybe. Cosmically? Definitely." So we stand there a while. She looks at me and says "Ill see what I can do."'
  'was there scaffolding around the Tower of Babel?'
  'a man clapping passionately. tear streams down.'
  'phantom bread'
  'fudsicle-eating boss'
  'goals: make sexy anthem.'
  'paypal $80'
  'Fujiwhara Effect: The tendency of two nearby tropical cyclones to rotate cyclonically about each other.'
  'atlantis christmas'
  'to the bat, is there an echo that sounds most beautiful?'
  'man yells in the street, "Gravity is a perversion." Gravity is a perversion? "Oh no mam, depravity. Gravity is fine."'
  'befuddled wizard does a magic show'
  ]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay') .innerHTML = quotes[randomNumber];
}
