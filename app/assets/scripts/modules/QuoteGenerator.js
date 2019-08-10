
class QuoteGenerator {
  constructor() {
    this.quote = ["Blank",

     "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br><br>-  Jake <small><em>(Adventure Time)</em></small>",

     "\"You forget what you want to remember, and you remember what you want to forget.\"<br><br> - Cormac McCarthy",

      "\"Never forget what you are. The rest of the world will not. Wear it like armour, then it can never be used to hurt you.\"<br><br>- George R.R. Martin",

       "\"The goal isn’t to live forever, the goal is to create something that will.\"<br><br>- Chuck Palahniuk",

        "\"When something is important enough, you do it even if the odds are not in your favour.\"<br><br>- Elon Musk",

        "\"Nowadays people know the price of everything and the value of nothing.\"<br><br>- Oscar Wilde",

         "\"Not all those who wander are lost.\"<br><br>- J.R.R. Tolkien",

         "\"Remember, today is the tomorrow you worried about yesterday.\"<br><br>- Dale Carnegie",];

    this.randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById('quote').innerHTML = this.quote[this.randNum];
  }
}

export default QuoteGenerator;
