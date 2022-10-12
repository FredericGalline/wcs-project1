function Users(nom, prenom, fonction, role) {
    this.nom = nom;
    this.prenom = prenom;
    this.fonction = fonction;
    this.role = role;
}

function Adresse(rue, ville, cp){
    this.rue = rue;
    this.ville = ville;
    this.cp = cp;
}

function Batiment(nom, ut, bat, adresse) {
    this.nom = nom;
    this.ut = ut;
    this.bat = bat;
    this.adresse = adresse;
}



var adresseMistral = new Adresse("4 ue Léon Gozlan", "Marseille", "13001");
//console.log(adresseMistral);

var batimentMistral = new Batiment("Mistral", "1234567", "001", adresseMistral);
console.log(batimentMistral);

