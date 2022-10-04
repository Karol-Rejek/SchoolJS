function numberCheck(x) 
{
    var a = x.length;
    for (let i = 0; i < a; i++) 
    {
        if(x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57)
        {
            return true;
        } 
    }   
    return false;
}

function check() 
{
    var haslo = document.getElementById("haslo").value;
    var l = haslo.length;
    if(haslo == "")
    {
        document.getElementById("wynik").innerHTML = '<span style="color:red;">Hasło jest PUSTE</span>'
    }
    else if(l >= 7 && numberCheck(haslo))
    {
        document.getElementById("wynik").innerHTML = '<span style="color:green;">Hasło jest Dobre</span>'
    }
    else if(l >= 4 && l <= 6 && numberCheck(haslo))
    {
        document.getElementById("wynik").innerHTML = '<span style="color:blue;">Hasło jest Średnie</span>'
    }
    else
    {
        document.getElementById("wynik").innerHTML = '<span style="color:yellow;">Hasło jest słabe</span>'
    }
}
