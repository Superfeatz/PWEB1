const nama = "Dreamybull";
let usia = 27;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;
    if(usia>2 && usia<10){
        generasi = "generasi Anak-anak"
    } else if(usia>=10 && usia<18){
        generasi = "generasi remaja"
    } else if(usia>=18 && usia<30){
        generasi = "generasi dewasa"
    } else if(usia>=30){
        generasi = "generasi tuwir"
    }else{
        generasi = "yntkts"
    }
    return biodata.innerHTML = generasi;
}
generateBiodata();
console.log(nama);
console.log(usia);
