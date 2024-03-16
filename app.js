const URL = "https://quote-garden.onrender.com/api/v3/quotes";
const Quotes = document.querySelector(".Quotes");
const author = document.querySelector(".Author")
const btn = document.querySelector("#get");
const getQuotes = async()=>{
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();//readable format
    // console.log(data.data[1].
    //     quoteText);
    const randomIndex = Math.floor(Math.random() * data.data.length);
    const randomQuote = data.data[randomIndex]; 
    // Display the random quote
    Quotes.innerText = randomQuote.quoteText; 
    author.innerText = randomQuote.quoteAuthor;
    
}
btn.addEventListener("click",getQuotes);
