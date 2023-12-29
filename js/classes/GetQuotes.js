// Get quotes with API

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    const getAuthor = data[0].author;
    const splitAuthor = getAuthor.split(',');
    const newAuthor = splitAuthor[0];
    document.getElementById("quotes").textContent = `"${data[0].text}"`;
    document.getElementById("author").textContent = newAuthor;
  });

