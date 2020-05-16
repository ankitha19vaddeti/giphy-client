function getGifs(searchString) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const parent = document.getElementById("results");
      while (parent.firstChild) {
          parent.firstChild.remove();
      }
      const { data = [] } = JSON.parse(this.responseText);
      data.forEach((gifResult) => {
        const { images: { original : { url = '' } } } = gifResult
        if(url.length > 0) {
          var x = document.createElement("IMG");
          x.setAttribute("src", url);
          x.className='gif-image';
          x.setAttribute("width", "200");
          x.setAttribute("height", "200");
          x.setAttribute("alt", "Gif unavailable");
          x.onclick = function() { 
            addGifToTextEditor(x)
          }
          document.getElementById('results').appendChild(x);
        }
      });
    }
  };
  xhttp.open("GET", `https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=206H6q6UUf0Rp70N0z6lXCbOJn0zrgxY&limit=18`, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}

function addGifToTextEditor(gifImage) {
  if(gifImage.parentElement.classList.contains('search-results')) {
    document.getElementById('editor-container').appendChild(gifImage);
  } 
}
