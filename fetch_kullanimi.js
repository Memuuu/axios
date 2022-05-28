//const btnTextGetir = document.getElementById('btn-text-getir');
const btnJSONGetir = document.getElementById('btn-json-getir');
const btnApidenJSONGetir = document.getElementById('btn-apiden-json-getir');
const btnJSONEkle = document.getElementById('btn-json-veri-ekle');

//btnTextGetir.addEventListener('click', getText);
btnJSONGetir.addEventListener('click', getJSON);
btnApidenJSONGetir.addEventListener('click', getJSONFromAPI);
btnJSONEkle.addEventListener('click', jsonVeriEkle);

const sonucDiv = document.getElementById('sonuc');

function getJSON(e) {
    e.preventDefault();

    fetch('ogrenciler.json')
        .then(response => response.json())
        .then(sonuc => {
            let cikti = '';
            sonuc.forEach(ogr => {
                cikti += `ogorenci adi ${ogr.ad} id:${ogr.id} \n`
            })
            sonucDiv.innerText = cikti;
        })
}

function getJSONFromAPI(e) {
    e.preventDefault;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(sonuc => ekranaYazdir(sonuc))
}

function ekranaYazdir(data) {
    let cikti = '';
    data.forEach(user => {
        cikti += `<li>${user.name}</li>`
    });
    sonucDiv.innerHTML = cikti;
}

//then ile veri ekleme

// function jsonVeriEkle(e) {
//     e.preventDefault();

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'deneme',
//             body: 'body alanı',
//             userId: 5
//         }),
//         headers: {'Content-Type': 'application/json'}
//     }).then(response => response.json())
//         .then(sonuc => console.log(sonuc));
// }

//async ve awaitle veri ekleme
async function jsonVeriEkle(e) {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı',
            userId: 25
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    const sonuc = await response.json();
    console.log(sonuc);
}