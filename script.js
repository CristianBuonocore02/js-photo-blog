// CONSEGNA
// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)






// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.



// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

fetch(endpoint)
    .then(res => res.json())
    .then(date => {
        console.log(date);
        let layout = ""
        date.forEach(post => {
            let { title, date, url } = post
            console.log(title, date, url)
            layout += `<div class="col-12 col-md-6 col-lg-4">
            <div class="card">
            <div class="pin-position">
            <img src="./img/pin.svg" alt="" width="40px" height="40px">
            </div>
            <div class="card-body">
            <div>
            <img class="img-fluid" src=${url}
            alt="">
            </div>
            <p class="paragrafo">${title}</p>
            <p class="paragrafo">${date}</p>
            </div>
            </div>
            </div>`
        });
        document.getElementById("layout").innerHTML = layout;

    })



// Font utilizzati:
// titoli: ‘Edu Tas Beginner’, sans-serif;d ate: ‘Sometype Mono’, ‘monospace’; (Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :occhiolino:)
// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
// Note
// Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile :faccia_leggermente_sorridente: