const inputData = document.querySelector(".search-box");
const btn = document.querySelector(".search-btn");


async function fetchMovie(filmname){
    try{
        const response = await fetch(`https://www.omdbapi.com/?s=${filmname}&apikey=57b5d9bd`)
        const data = await response.json()
        console.log(data)
        // document.querySelector(".result").textContent = `Search results for "${filmname}"`;
        for(let i = 0; i<=9; i++){
            document.querySelector(`#filmTitle${i}`).textContent = data.Search[i].Title
            document.querySelector(`#filmPoster${i}`).src = data.Search[i].Poster
            document.querySelector(`#filmyear${i}`).textContent =data.Search[i].Year
            document.querySelector(`#type${i}`).textContent =data.Search[i].Type
            
        }
    }
    catch{
        alert("Movie not available")
    }

};

btn.addEventListener("click",(()=>{
    const filmName = inputData.value;
    document.querySelector(".result").textContent = `Search results for "${inputData.value}"`;
    fetchMovie(filmName);
}));

inputData.addEventListener("keyup",((clicked)=>{
    if (clicked.key == "Enter"){
        const filmName = inputData.value;
        document.querySelector(".result").textContent = `Search results for "${inputData.value}"`;
        fetchMovie(filmName);
    };
}));

fetchMovie("War")