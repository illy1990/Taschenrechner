// -----------------------------------------------------------------------
// if (5=="5")
// {
//     document.write("Hallo hier bin ich!")
// }
// else{
//     document.write ("I am false")
// }
// -----------------------------------------------------------------------
// if (5 =="5"){
//     document.write("Hallo hier bin ich!")
// } else if (5 =="10"){
//     document.write("Hallo hier bin ich!")
// } else {
//     document.write("Hallo hier bin ich!")
// }
// -----------------------------------------------------------------------
// let x = 18;
// if (x === "18"){
//     document.write("x === 18")
// } else if (x < 5){
//     document.write("x < 5")
// } else if (x > 5){
//     document.write("x > 5")
// } else{
//     document.write("false")
// }
// -----------------------------------------------------------------------
// const now = new Date();
// var x = now.getHours();
// var y = now.getMinutes();

// if (x <12){
//     document.write("Guten Morgen, es ist " + x + ":" + y + " Uhr")
// } else if (x < 15){
//     document.write("Guten Mittag, es ist " + x + ":" + y + " Uhr")
// } else {
//     document.write("Guten Abend, es ist " + x + ":" + y + " Uhr")
// }
// -----------------------------------------------------------------------
// if (true && false){
//     document.write ("Test erfolgreich")
// } else{
//     document.write ("Test fehlgeschlagen")
// }

// if (true || false ){
//     document.write ("Test erfolgreich")
// } else{
//     document.write ("Test fehlgeschlagen")
// }

// if (!(2 == 3)){
//     document.write ("Test erfolgreich")
// } else{
//     document.write ("Test fehlgeschlagen")
// }
// -----------------------------------------------------------------------
//CodeFlow Übung lev1_1: conditional-statements punkten

function adult(){

let age = document.getElementById("age").value;

if (age >= 18){
    document.write("true");
}
    else
{ 
    document.write("false");
}
}
// -----------------------------------------------------------------------
// CodeFlow Übung lev1_2: conditional-statements

function weather(){
    let quality = document.getElementById("quality").value;
    if (8<=quality && quality<=10){
        document.write("super")
    }
    else if (6<=quality && quality<=8)
    {
        document.write("gut")
    }
    else if (3<=quality && quality<=6)
    {
        document.write("okay")
    }
    else if (0<=quality && quality<=3)
    {
        document.write("schlecht")
    }
    else {
        document.write("thats no input")
    }
}
// -----------------------------------------------------------------------
// CodeFlow Übung lev1_3: conditional statements mit form
function greaterThen(){

    if (document.form1.text1.value >= 18){
        document.write("Ja. Du kannst Shisha rauchen.");
    }
        else
    { 
        document.write("Du darfst leider noch nicht Shisha rauchen.");
    }
    }
// -----------------------------------------------------------------------
// CodeFlow Übung lev2_4: conditional-statements punkten
function AdditionGanzZahl()
{
    let zahl1 = document.getElementById("Zahl1").value;
    let zahl1_1 = Number(zahl1);
    let zahl2 = document.getElementById("Zahl2").value;
    let zahl2_1 = Number(zahl2);
    let Summe = zahl1_1 + zahl2_1;

    if (zahl1_1 == zahl2_1) {   
        document.write(Summe*5)
    } else{
        document.write(Summe)
    }
}
// ---------------------------------------------------------------------
function colorChange(){
    let color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
}
// ---------------------------------------------------------------------
let zahl = 0;
function plus1(){
    zahl++
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function minus1(){
    zahl--;
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function plus10(){
    zahl=zahl+10;
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function minus10(){
    zahl=zahl-10;
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function plus100(){
    zahl=zahl+100;
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function minus100(){
    zahl=zahl-100;
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function malzwei(){
    zahl=zahl*2;
    // let zahl = document.getElementById("Zahl1").value;
    // let zahlNumber = Number(zahl);
    // console.log(zahl)
    // console.log(typeof(zahl));
    // console.log(typeof(zahlNumber));
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
function neustart(){
    let zahl = 0;
    document.getElementById("output").innerHTML = zahl;
}
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// TASCHENRECHNER

// ZAHLEN

var TaschenRechnerZahl = "";
var KatzenOperator ="";
var TaschenRechnerZahl2 ="";


function StringNull(){
    if(KatzenOperator.length==0){
    TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl0").value;
    document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;
    }
    else {
    TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl0").value;
    document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
    }
}

function StringEins(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl1").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;
        }
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl1").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringZwei(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl2").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl2").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringDrei(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl3").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl3").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringVier(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl4").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl4").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringFuenf(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl5").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl5").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringSechs(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl6").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl6").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringSieben(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl7").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl7").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

function StringAcht(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl8").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl8").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}
function StringNeun(){
    if(KatzenOperator.length==0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl9").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;}
        else {
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl9").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
}

// OPERATOREN
function Komma_2(){
    var count = (TaschenRechnerZahl.match(".") || []).length;
    var Laenge = TaschenRechnerZahl.length;
    let x = document.getElementById("ausgabe").innerHTML.indexOf(".")
    var count2 = (TaschenRechnerZahl2.match(".") || []).length;
    var Laenge2 = TaschenRechnerZahl2.length;
    if(KatzenOperator.length==0)
    {
        if (document.getElementById("ausgabe").innerHTML.indexOf(".") == -1 && Laenge>0){
        TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Komma").value;
        document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;
    }
        
        else{
            document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;
        }
    }   
    else{
        if (document.getElementById("ausgabe3").innerHTML.indexOf(".") == -1 && Laenge2>0){
        TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Komma").value;
        document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;}
        else{
            document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
        }
    }
}


function katzenMal(){    
    KatzenOperator ="";
    KatzenOperator = KatzenOperator+"*";
    document.getElementById("ausgabe2").innerHTML = KatzenOperator;}

function katzenDurch(){  
    KatzenOperator ="";  
    KatzenOperator = KatzenOperator+"/";
    document.getElementById("ausgabe2").innerHTML = KatzenOperator;}

function KatzenPlus(){    
    KatzenOperator ="";
    KatzenOperator = KatzenOperator+"+";
    document.getElementById("ausgabe2").innerHTML = KatzenOperator;}

function KatzenMinus(){  
    KatzenOperator ="";  
    KatzenOperator = KatzenOperator+"-";
    document.getElementById("ausgabe2").innerHTML = KatzenOperator;}

function KatzenNeuStart(){
    document.getElementById("ausgabe").innerHTML = "";
    document.getElementById("ausgabe2").innerHTML = "";
    document.getElementById("ausgabe3").innerHTML = "";
    document.getElementById("ausgabe4").innerHTML = "";
    TaschenRechnerZahl = "";
    KatzenOperator ="";
    TaschenRechnerZahl2 ="";
}


function KatzenErgebnis(){
        var KatzenFinal =
         document.getElementById("ausgabe").innerHTML+
         document.getElementById("ausgabe2").innerHTML+
         document.getElementById("ausgabe3").innerHTML
     document.getElementById("ausgabe4").innerHTML = eval(KatzenFinal);

}


