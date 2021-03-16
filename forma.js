function button(){

    
    var ime = document.forma.ime.value;
    var prezime = document.forma.prezime.value;
    var email = document.forma.email.value;
    var poruka = document.forma.poruka.value;
    var greska = document.getElementById("greska");
    console.log('nesto');
    try
    {
        if(ime == "" || prezime == ""|| email =="" || poruka =="")
            throw "Molimo popunite sva polja!"
        else
        {
            if(ime.length<5)
                throw "Korisnicko ime je prekratko";
            else if(ime.length>10)
                throw "Korisnicko ime je predugacko";
            else if(email.length<10)
                throw "Email je nepravilno unesen!";
            else if(poruka.length<20)
                throw "Poruka je kratka";
                else{
                    greska.style.display = "none";
                    alert("Uspesna popunjena forma!"); 
                }
                ime.value="";
                prezime.value="";
                email.value="";
                poruka.value="";
        }
    }
    
    catch(error)
    {
        greska.innerHTML = error;
        greska.style.display = "block";
    }

}
