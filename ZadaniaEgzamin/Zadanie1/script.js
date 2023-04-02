function pokazCene()
{
    var cena = 0;
    if(document.getElementById('krotkie').checked) {
    cena = 25;
    }
    if(document.getElementById('srednie').checked) {
    cena = 30;
    }
    if(document.getElementById('poldlugie').checked) {
    cena = 40;
    }
    if(document.getElementById('dlugie').checked) {
    cena = 50;
    }
    document.getElementById('wynik').innerHTML = "Cena strzyżenia: " + cena + "zł";
}