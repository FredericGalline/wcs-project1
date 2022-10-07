let users = [
  {
    name: "Frédéric",
    lastName: "Leschira",
    picture: "",
    exe: "",
    bio: "Il faut viser la lune, parce qu'au moins, si vous échouez, vous finirez dans les étoiles - Oscar Wilde", //petit slogan en une phrase
    phone: "0610025866",
    city: "BEAUCAIRE 30300",
    github: "https://github.com/fredl2tp",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    userFacebook: "",
  },
  {
    name: "Adrien",
    lastName: "Sergent",
    picture: "",
    sexe: "",
    bio: "El Professor !",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Sandra",
    lastName: "Taboada",
    picture: "",
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Aline",
    lastName: "Sonza-Reorda",
    picture: "",
    sexe: "",
    bio: "Envoyé par JS !!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Cristophe",
    lastName: "Montreux",
    picture: "",
    sexe: "M",
    bio: "Envoyé par JS !!!!!",
    phone: "0620813702",
    city: "Roquemaure",
    github: "https://github.com/Christophe-76",
    slack: "christophe.mortreux@sncf.fr",
    discord: "Christophe#5389",
    whatsapp: "",
    twitter: "",
    instagram: "",
    userFacebook: "",
  },
  {
    name: "Eric",
    lastName: "Rouviere",
    picture: "",
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Sabine",
    lastName: "Bertoneri",
    picture: "",
    sexe: "",
    bio: "J'adore les animaux la nature et coder...", //petit slogan en une phrase
    phone: "06.79.53.32.81",
    city: "Miramas",
    github: "Binou05",
    slack: "Sabine Bertoneri",
    discord: "Sabine",
    whatsapp: "",
    twitter: "",
    instagram: "",
    userFacebook: "Sabine Bertoneri",
  },
  {
    name: "Frédéric",
    lastName: "Galliné",
    picture: "",
    sexe: "Homme",
    bio: "Less is more",
    phone: "0676072663",
    city: "Miramas",
    github: "https://github.com/FredericGalline/",
    slack: "https://wild4ever.slack.com/team/U041S394JAE",
    discord: "https://discordapp.com/users/Fred_G#2270",
    whatsapp: "https://wa.me/33676072663",
    twitter: "https://www.twitter.com/fred",
    instagram: "https://www.instagram.com/fred_galline/",
    facebook: "https://facebook.com/fredericgalline",
  },
  {
    name: "Karine",
    lastName: "RANDY",
    picture: "",
    sexe: "Femme",
    bio: "Je ne veux pas participer à ce modèle de société qui a donné à l'argent plus d'importance qu'à la vie. Je suis ici-bas pour vivre, je ne suis pas ici pour augmenter le produit national brut.",
    phone: "0622742925",
    city: "Eyragues",
    github: "Samikate",
    slack: "Samikate",
    discord: "Samikate",
    whatsapp: "https://wa.me/33622742925",
    twitter: "",
    instagram: "",
    facebook: "Karine randy",
  },
  {
    name: "Fontaine",
    lastName: "geoffroy",
    picture: "",
    sexe: "Homme",
    bio: "geek for ever", //petit slogan en une phrase
    phone: "0698047213",
    city: "Nice",
    github: "hgeoffont",
    slack: "Geoffroy Fontaine",
    discord: "geoffroy",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "geoffroy fontaine",
  },
  {
    name: "Munoz",
    lastName: "Jerome",
    picture: "",
    sexe: "Homme",
    bio: "Merci la vie",
    phone: "0781855626",
    city: "AVIGNON",
    github: "https://github.com/jejem8430",
    slack: "Jéjé Munoz",
    discord: "jejem8430",
    whatsapp: "Jerome Munoz",
    twitter: "https://twitter.com/Gerom84000",
    facebook: "Jerome Munoz",
  },
  {
    name: "Fanny",
    lastName: "Bononi",
    picture: "",
    sexe: "Feminin",
    bio: "moi les bio j'aime pas ça",
    phone: "0659667475",
    city: "Marseille",
    github: "https://github.com/FannyBonnet",
    slack: "Fanny Bononi",
    discord: "Faelys#0469",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "Fanny Bononi",
  },
  {
    name: "Roland",
    lastName: "Esnay",
    picture: "",
    sexe: "M",
    bio: "Envoyé par JS !!!!!",
    phone: "06.25.01.68.03",
    city: "La Seyne sur mer",
    github: "https://github.com/RolandEsnay",
    slack: "@Roooo",
    discord: "Eleven#4413",
    whatsapp: "06.25.01.68.03",
    twitter: "@To0pto0p",
    instagram: "",
    userFacebook: "roland.esnay",
  },
  {
    name: "vide",
    lastName: "",
    picture: "./img/test.jpg",
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
];

/****** On affiche les cartes */

let cards = "";
for (let i = 0; i < users.length; i++) {
  cards += `
    <div class="card">
          <div class="header">
            <div class="image jaune bleu">
              <img src="${
                users[i].picture ? users[i].picture : "./img/user.png"
              }" />
            </div>
            <div class="userInfo">
              <h2>${users[i].name} <span>${users[i].lastName} </span></h2>
              <div class="spec">${users[i].bio}</div>
            </div>
          </div>
          <div class="content">
            <div class="icon">
              ${
                users[i].github
                  ? '<a href="' +
                    users[i].github +
                    '" target="_blank"><i class="fa-brands fa-github"></i></a>'
                  : ""
              }
              ${
                users[i].facebook
                  ? '<a href="' +
                    users[i].facebook +
                    '" target="_blank"><i class="fa-brands fa-facebook"></i></a>'
                  : ""
              }
              ${
                users[i].twitter
                  ? '<a href="' +
                    users[i].twitter +
                    '" target="_blank"><i class="fa-brands fa-twitter"></i></a>'
                  : ""
              }
              ${
                users[i].instagram
                  ? '<a href="' +
                    users[i].instagram +
                    '" target="_blank"><i class="fa-brands fa-instagram"></i></a>'
                  : ""
              }
              ${
                users[i].discord
                  ? '<a href="' +
                    users[i].discord +
                    '" target="_blank"><i class="fa-brands fa-discord"></i></a>'
                  : ""
              }
              ${
                users[i].slack
                  ? '<a href="' +
                    users[i].slack +
                    '" target="_blank"><i class="fa-brands fa-slack"></i></a>'
                  : ""
              }
              ${
                users[i].whatsapp
                  ? '<a href="' +
                    users[i].whatsapp +
                    '" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>'
                  : ""
              }
            </div>
          </div>
      </div>
  `;
}

document.getElementById("cards").innerHTML = cards;
