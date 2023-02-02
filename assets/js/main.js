document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('films').innerHTML = ``
  fetch(`https://imdb-api.com/API/Search/k_w31e4jog/${document.getElementById(`searchText`).value}`)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.results);
        for (let film of data.results) {
            console.log(film);
            document.getElementById('films').innerHTML += `
            <div class="row">
            <div class="col-lg-3 col-sm-6" style="width: 100%">
              <div class="item">
                <img class="filmsekil" src="${film.image}" alt="">
                <h4>${film.title}<br></h4>
                <h6>${film.description}</h6>
              </div>
            </div>
          </div>
            `
        }
    })
  })

   



   