//{userName:"", userLastName:"", userBio:"", userPhone:"", userCity:"", userGithub:"", userSlack:"", userDiscord:"", userWhatsapp:"", userTwitter:"", userFacebook:""}

function cards() {
  let users = [
    {
      name: "Fred",
      lastName: "Test",
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
  ];
  for (let i = 0; i < users.length; i++) {
    let card = `<h2>${users.name[i]} <span>${users.name[i]} </span></h2>`;
  }

  return cards;
}

/*
        <div class="card">
          <div class="header">
            <div class="image">
              <img src="./img/user.png" />
            </div>
            <div class="userInfo">
              <h2>Adrien <span>Sergent</span></h2>
              <div class="spec">Petites spécialités de chacun</div>
            </div>
          </div>
          <div class="content">
            <div class="icon">
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        */
