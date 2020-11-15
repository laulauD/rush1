/*jslint browser:true */
/*jslint devel: true */
document.getElementById("fo").addEventListener("submit", function (e) {
    "use strict";
    var erreur, nom, email, phone, url, date;
    nom = document.getElementById("nom");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    url = document.getElementById("url");
    date = document.getElementById("date");
    if (!date.value) {
        erreur = "Veuillez renseigner une date de naissance.";
        date.style.backgroundColor = "rgba(233, 16, 16, 0.6)";
    }
    if (!url.value) {
        erreur = "Veuillez renseigner le site web.";
        url.style.backgroundColor = "rgba(233, 16, 16, 0.6)";
    }
    if (!phone.value) {
        erreur = "Veuillez renseigner votre numéro de téléphone.";
        phone.style.backgroundColor = "rgba(233, 16, 16, 0.6)";
    }
    if (!email.value) {
        erreur = "Veuillez renseigner un email.";
        email.style.backgroundColor = "rgba(233, 16, 16, 0.6)";
    }
    if (!nom.value) {
        erreur = "Veuillez renseigner votre nom.";
        nom.style.backgroundColor = "rgba(233, 16, 16, 0.6)";
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }
    alert("Formulaire bien envoyé !");
});
