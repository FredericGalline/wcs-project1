let users = [
  {
    name: "Sabine",
    lastName: "Bertoneri",
    picture:""
    sexe: "",
    bio: "",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "Adrien",
    lastName: "Sergent",
    picture:""
    sexe: "",
    bio: "El Professor !",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "Sandra",
    lastName: "Taboada",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "Aline",
    lastName: "TaboadaSonza - Reorda",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "Christophe",
    lastName: "Mortreux",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "Eric",
    lastName: "Rouviere",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "vide",
    lastName: "",
    picture:""
    sexe: "",
    bio: "", //petit slogan en une phrase
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "Frédéric",
    lastName: "Galliné",
    picture:""
    sexe: "Homme",
    bio: "",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "@fred",
    userFacebook: "",
  },
  {
    name: "Karine",
    lastName: "RANDY",
    picture:""
    sexe: "Femme",
    bio: "Je ne veux pas participer à ce modèle de société qui a donné à l'argent plus d'importance qu'à la vie. Je suis ici-bas pour vivre, je ne suis pas ici pour augmenter le produit national brut.",
    phone: "0622742925",
    city: "Eyragues",
    github: "https://github.com/Samikate",
    slack: "Samikate",
    discord: "Samikate",
    whatsapp: "Karine RANDY",
    twitter: "",
    userFacebook: "Karine randy",
  },
  {
    name: "vide",
    lastName: "",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "Fanny Bononi",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "vide",
    lastName: "",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "vide",
    lastName: "",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "vide",
    lastName: "",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
  {
    name: "vide",
    lastName: "",
    picture:""
    sexe: "",
    bio: "Envoyé par JS !!!!!",
    phone: "",
    city: "",
    github: "",
    slack: "",
    discord: "",
    whatsapp: "",
    twitter: "",
    userFacebook: "",
  },
];

/****** On affiche les cartes */

let cards = "";
for (let i = 0; i < users.length; i++) {
  cards += `
    <div class="card">
          <div class="header">
            <div class="image jaune bleu">
              <img src="./img/user.png" />
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
                  ? '<a href="${users[i].github}" target="_blank"><i class="fa-brands fa-github"></i></a>'
                  : ""
              }
              ${
                users[i].facebook
                  ? '<a href="${users[i].facebook}"><i class="fa-brands fa-facebook"></i></a>'
                  : ""
              }
              ${
                users[i].twitter
                  ? '<a href="${users[i].twitter}"><i class="fa-brands fa-twitter"></i></a>'
                  : ""
              }
              ${
                users[i].instagram
                  ? '<a href="${users[i].instagram}"><i class="fa-brands fa-instagram"></i></a>'
                  : ""
              }
              ${
                users[i].discord
                  ? '<a href="${users[i].discord}"><i class="fa-brands fa-discord"></i></a>'
                  : ""
              }
              ${
                users[i].slack
                  ? '<a href="${users[i].slack}"><i class="fa-brands fa-slack"></i></a>'
                  : ""
              }
              ${
                users[i].whatsapp
                  ? '<a href="${users[i].whatsapp}"><i class="fa-brands fa-whatsapp"></i></a>'
                  : ""
              }
            </div>
          </div>
      </div>
  `;
}

document.getElementById("cards").innerHTML = cards;
console.log(cards);
