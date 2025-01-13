const accesskey = "Je9SrBGeFEYlNx2IZcHdPXatDNCixIf-s6DFTLsFWIk";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-box");
const Result = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

     console.log(data);
     if(page === 1)
     {
        Result.innerHTML = "";
     }
    
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        Result.appendChild(imageLink);

    })
    showMore.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    page = 1;
    searchImages();  

})

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})
