function narudzba()
{
    var minismo = document.forma.minismo;
    var c4 = document.forma.c4;
    var malanocna = document.forma.malanocna;
    var kototamo = document.forma.kototamo;
    var sivikamion = document.forma.sivikamion;
    var racun = 0;

    if(minismo.checked)
    racun+=Number(minismo.value);
    if(c4.checked)
    racun+=Number(c4.value);
    if(malanocna.checked)
    racun+=Number(malanocna.value);
    if(kototamo.checked)
    racun+=Number(kototamo.value);
    if(sivikamion.checked)
    racun+=Number(sivikamion.value);

    alert("Racun iznosi " + racun);

}