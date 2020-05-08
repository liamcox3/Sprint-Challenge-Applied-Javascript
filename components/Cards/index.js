// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardCreator(data) {
    let card = document.createElement("div");
    let headline1 = document.createElement("div");
    let author = document.createElement("div");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");
    let span = document.createElement("span");

    card.classList.add("card");
    headline1.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    card.appendChild(headline1);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(span);

    // Text content
    headline1.textContent = data.headline;
    img.src = data.authorPhoto;
    span.textContent = data.authorName;

    return card;
}

cardContainer = document.querySelector(".cards-container");

// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")

    .then((res) => {
        console.log(res);
        return res.data.articles;
    })
    .then((response) => {
        Object.keys(response).forEach((art) => {
            response[art].forEach((art1) => {
                cardContainer.appendChild(cardCreator(art1));
            });
        });
    });
