const Quotelist = [
    {
        quote : "To live is the rarest thing in the world. Most people exist, that is all.",
        Author : "Oscar Wilde"
    },
    {
        quote : "The strongest principle of growth lies in the human choice.",
        Author : "George Eliot"
    },
    {
        quote : 'Pain is inevitable. Suffering is optional.',
        Author : "Haruki Murakami"
    },
    {
        quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        Author: "Rick Cook"
    },
    {
        quote : "All the world's a stage, and all the men and women merely players.",
        Author : "William Shakespeare"
    },
    {
        quote : "Unable are the loved to die for love is immortality.",
        Author : "Emily Dickinson"
    },
    {
        quote : "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
        Author : "John Green"
    },
    {
        quote : "Life is tough my darling, but so are you.",
        Author : "Stephanie Bennett Henry"
    }
]

let index,i;
let quote,Author;
let new_btn = document.querySelector(".new-btn");
// console.log(new_btn);
let quote_box = document.querySelector('.quote');
// console.log(quote_box);
let author_box = document.querySelector('.author');
// console.log(author_box);

new_btn.addEventListener('click', () => {
    index = Math.floor(Math.random() * Quotelist.length);
    quote = Quotelist[index]["quote"];
    Author = Quotelist[index]["Author"];
    quote_box.innerText = quote;
    author_box.innerText = Author;
})