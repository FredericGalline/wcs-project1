let users = [
  {
    name: "Sabine",
    lastName: "Bertoneri",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
    name: "",
    lastName: "",
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
            <div class="image">
              <img src="./img/user.png" />
            </div>
            <div class="userInfo">
              <h2>${users[i].name} <span>${users[i].lastName} </span></h2>
              <div class="spec">${users[i].bio}</div>
            </div>
          </div>
          <div class="content">
            <div class="icon">
              <a href="${users[i].github}"><i class="fa-brands fa-github"></i></a>
              <a href="${users[i].facebook}"><i class="fa-brands fa-facebook"></i></a>
              <a href="${users[i].twitter}"><i class="fa-brands fa-twitter"></i></a>
              <a href="${users[i].instagram}"><i class="fa-brands fa-instagram"></i></a>
              <a href="${users[i].discord}"><i class="fa-brands fa-discord"></i></a>
              <a href="${users[i].slack}"><i class="fa-brands fa-slack"></i></a>
              <a href="${users[i].whatsapp}"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
      </div>
  `;
}

document.getElementById("cards").innerHTML = `${cards}`;
console.log(cards);
