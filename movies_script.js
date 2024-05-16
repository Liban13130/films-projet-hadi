const films = [
  {
    id: 1,
    titre: "Inception",
    annee: 2010,
    affiche: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
    genre: ["Science-fiction", "Thriller"],
    realisateur: {
      nom: "Christopher Nolan",
      age: 50,
      autresFilms: [
        { titre: "Interstellar", annee: 2014 },
        { titre: "The Dark Knight", annee: 2008 }
      ]
    },
    acteurs: [
      {
        nom: "Leonardo DiCaprio",
        role: "Cobb",
        nominations: ["Oscar", "Golden Globe"]
      },
      {
        nom: "Elliot Page",
        role: "Ariadne",
        nominations: []
      }
    ],
    critiques: [
      { source: "IMDb", note: 8.8, critiqueText: "Un chef-d'œuvre de narration et d'effets visuels." },
      { source: "Rotten Tomatoes", note: 87, critiqueText: "Visuellement éblouissant, superbement construit." }
    ],
    sortie: {
      USA: "2010-07-16",
      France: "2010-07-21",
      Japon: "2010-07-23"
    }
  },
  {
    id: 2,
    titre: "Matrix",
    annee: 1999,
    affiche: "https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg",
    genre: ["Action", "Science-fiction"],
    realisateur: {
      nom: "Les Wachowski",
      age: null,
      autresFilms: [
        { titre: "Matrix Reloaded", annee: 2003 },
        { titre: "Matrix Revolutions", annee: 2003 }
      ]
    },
    acteurs: [
      {
        nom: "Keanu Reeves",
        role: "Neo",
        nominations: ["Saturn Award"]
      },
      {
        nom: "Carrie-Anne Moss",
        role: "Trinity",
        nominations: []
      }
    ],
    critiques: [
      { source: "IMDb", note: 8.7, critiqueText: "Révolutionnaire pour son époque, un classique instantané." },
      { source: "Metacritic", note: 73, critiqueText: "Innovant malgré certaines faiblesses narratives." }
    ],
    sortie: {
      USA: "1999-03-31",
      France: "1999-06-23",
      Japon: "1999-09-11"
    }
  },
  {
    id: 3,
    titre: "Parasite",
    annee: 2019,
    affiche: "https://fr.web.img5.acsta.net/c_310_420/pictures/20/02/12/13/58/3992754.jpg",
    genre: ["Thriller", "Drame"],
    realisateur: {
      nom: "Bong Joon-ho",
      age: 50,
      autresFilms: [
        { titre: "Snowpiercer", annee: 2013 },
        { titre: "The Host", annee: 2006 }
      ]
    },
    acteurs: [
      {
        nom: "Song Kang-ho",
        role: "Kim Ki-taek",
        nominations: ["Palme d'Or"]
      },
      {
        nom: "Choi Woo-shik",
        role: "Kim Ki-woo",
        nominations: []
      }
    ],
    critiques: [
      { source: "IMDb", note: 8.6, critiqueText: "Une satire sociale poignante avec une tension palpable." },
      { source: "Rotten Tomatoes", note: 98, critiqueText: "Un chef-d'œuvre moderne, parfaitement rythmé et émotionnellement engageant." }
    ],
    sortie: {
      USA: "2019-10-11",
      France: "2019-06-05",
      Japon: "2019-12-27"
    },
    studio: "CJ Entertainment"
  }
];


films.forEach(element => {

  let note = element.critiques.forEach(el => {
    return el.note
  })
  
  console.log(note);

  const card = 
  `
  <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="${element.affiche}"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">

            <div class="media-content">
              <h1>Film : ${element.titre}</h1>
              <span>${element.annee}</span>
              <p class="title is-4">Genre : ${element.genre.join(", ")}</p>
              <p class="subtitle is-6">Réalisateur : ${element.realisateur.nom}</p>
              <p class="subtitle is-6">Acteurs : </p>
              <p class="subtitle is-6">Sortie : ${element.sortie.France}</p>
            </div>
          </div>
        </div>
      </div>
  `
  document.querySelector('.container').insertAdjacentHTML('afterbegin', card)
});

// for (const prop of films) {
//   const truc = prop.critiques
//   truc.forEach(element => {
//     const card = `
//     <p class="title is-4">Genre : ${prop.genre.join(", ")}</p>

//     `
//   document.querySelector('.container').insertAdjacentHTML('afterbegin', card)
//   });
// }