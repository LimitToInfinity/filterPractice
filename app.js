document.addEventListener("DOMContentLoaded", postLoad);

function postLoad(){
    let allVenues = [];
    const cards = document.querySelector(".cards");

    fetch("https://chordconnectback.herokuapp.com/venues")
        .then(response => response.json())
        .then(venues => allVenues = venues)
        .then(displayVenues)

    function displayVenues(venues)
    {
        venues.forEach(venue => {
            const card = document.createElement("div");
            card.classList.add("card");

            const h1 = document.createElement("h1");
            // const p = document.createElement("p");

            h1.innerText = venue.name;
            // p.innerText = venue.description;

            card.append(h1);

            cards.append(card);
        })
    }

    const input = document.querySelector("input");
    input.addEventListener("input", searchBar);

    function searchBar(event)
    {
        allCards = Array.from(document.querySelectorAll(".cards > div"));
        allCards.forEach(card => card.remove());
        let search = event.target.value;
        filtered = allVenues.filter(venue => venue.name.toLowerCase().includes(search.toLowerCase()));

        displayVenues(filtered);
    }
}