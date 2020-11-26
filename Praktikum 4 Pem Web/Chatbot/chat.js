function chat() {
    let kata = document.getElementById('pesan').value;
    let tampil  = document.getElementById('tampilan');
    tampil.innerHTML = tampil.innerHTML + "<br>" + kata;
}
