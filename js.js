const quote= document.querySelector(".quote");
const person= document.querySelector(".person");
const btn= document.querySelector("#new-quote");
btn.addEventListener("click",getQuote);

function getQuote() {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>{
        quote.innerHTML= `"${data.content}"`;
        person.innerHTML= data.author;
    })
    }