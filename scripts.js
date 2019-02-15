//Zadanie 1

let wlacznik=document.getElementsByClassName("wlacznik")
for(let element of wlacznik){
    var on=0
    element.onclick=function(ev){   
        if(ev.target.style.background=="green"){
            ev.target.style.background="grey"
            on--
        }
        else{
            ev.target.style.background="green"
            on++
         }        
    document.getElementById("on").innerHTML= "Włączono: "+on
    }
}

//Zadanie 2

function dodaj(){
    let rozmiar=document.getElementById("rozmiar").value
    if (rozmiar == 0){
        alert("Podana wartość musi być większa od zera! Wprowadź poprawną wartość.")
    }
    else if (isNaN(rozmiar)){
        alert("Podana wartość nie jest liczbą! Wprowadź poprawną wartość.")
    }
    else if (rozmiar<0){
        alert("Podana wartość jest liczbą ujemną! Wprowadź wartość dodatnią.")
    }
    else{
        document.getElementById("para_liczb").innerHTML=""
        let tablica2 = []
        tablica2[0]=3
        console.log(tablica2[0])
        for(let i=1; i<rozmiar; i++){
            let los = Math.floor(Math.random()*6-3)
            console.log("Los: "+ los)
            tablica2[i]=tablica2[i-1]+los
            //console.log("Tab: "+ tablica2[i])
        }
        document.getElementById("tablica_wynik").innerHTML="["+tablica2+"]"  
        for(let i=0;i<tablica2.length;i++){
            if(tablica2[i]==tablica2[i+1]){
                document.getElementById("para_liczb").innerHTML += "Parę takich samych elementów stanowi liczba: " + tablica2[i] +"</br>"
            }   
        }
    }
}

//Zadanie 3

const litery= new Array(35)
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ż";
litery[34]="Ź";

var tablica_slow=[]

function losuj_dlugosc_slowa(){
	var r = Math.floor(Math.random()*(10-4+1)+4);
   return r;
}

function losuj_litere(){
    var r = Math.floor(Math.random()*litery.length);
    return r;
}

function pokaz_slowa(){
    var licznik_globalny=0
    tablica_slow.splice(0)
    var usun_liste = document.getElementById('lista_slow');
    usun_liste.innerHTML = '';
    liczba_slow_do_wyswietlenia = document.getElementById("liczba_slow").value
    if (liczba_slow_do_wyswietlenia == 0){alert("Podana wartość musi być większa od zera! Wprowadź poprawną wartość.")}
    else if (isNaN(liczba_slow_do_wyswietlenia)){alert("Podana wartość nie jest liczbą! Wprowadź poprawną wartość.")}
    else if (liczba_slow_do_wyswietlenia<0){alert("Podana wartość jest liczbą ujemną! Wprowadź wartość dodatnią.") }
    else{
        for(let i=1; i<=liczba_slow_do_wyswietlenia;i++){
            dlugosc_slowa=losuj_dlugosc_slowa()
            let slowo=""
                for(let j=0; j<dlugosc_slowa;j++){
                    let index = losuj_litere()
                    slowo += litery[index]
                }
                tablica_slow.push(slowo)
        }
        console.log("Tablica słow: "+tablica_slow)
 
        
        for(let i=0; i<liczba_slow_do_wyswietlenia;i++){
            var licznik_lokalny=0
            var element_listy = document.createElement("li")
            var value = document.createTextNode(tablica_slow[i])
            element_listy.appendChild(value)
            var wyswietl_element = document.getElementById("lista_slow")
            wyswietl_element.appendChild(element_listy)
                
            element_listy.onclick = function(){
                licznik_lokalny++
                var kiedy_klik = data()
                this.setAttribute("licznik",licznik_lokalny)
                this.setAttribute("data", kiedy_klik)
                this.innerHTML = tablica_slow[i]+" Licznik: "+licznik_lokalny+ " Data: "+kiedy_klik
//                licznik_globalny += licznik_lokalny
                
//                console.log("Licznik globalny: "+licznik_globalny)
                console.log("Licznik lokalny: "+licznik_lokalny)
                
            }
           
        }
    }
}


function data(){
    var dzisiaj = new Date();
    var rok=dzisiaj.getFullYear();
    var miesiac=dzisiaj.getMonth()+1;
    if (miesiac<10) miesiac="0"+miesiac
    var dzien=dzisiaj.getDate();
    if (dzien<10) dzien="0"+dzien
    var godzina = dzisiaj.getHours();
    if (godzina<10) godzina="0"+godzina
    var minuta = dzisiaj.getMinutes();
    if (minuta<10) minuta="0"+minuta
    var sekunda = dzisiaj.getSeconds();
    if (sekunda<10) sekunda="0"+sekunda
    var czas =godzina+":"+minuta+":"+sekunda
    return czas;
}

//Zadanie 4

function tworz_tabele() {
    // zapytać jak usuwać????
    var wiersze = document.getElementById("wiersz").value
    console.log("Liczba wierszy: "+wiersze)
    var kolumny = document.getElementById("kolumna").value
    console.log("Liczba kolumn: "+kolumny)
    if ((wiersze == 0) || (kolumny==0)){
        alert("Podana wartość musi być większa od zera! Wprowadź poprawną wartość.")
    }
    else if ((isNaN(wiersze)) || (isNaN(kolumny))){
        alert("Podana wartość nie jest liczbą! Wprowadź poprawną wartość.")
    }
    else if ((wiersze<0) || (kolumny<0)){
        alert("Podana wartość jest liczbą ujemną! Wprowadź wartość dodatnią.") 
    }
    else{
        var dodaj_tab = document.createElement("table")
        var value = document.createTextNode("")
        dodaj_tab.appendChild(value)
        dodaj_tab.setAttribute("id","zadanie4")
        var dorzuc = document.getElementById("zad4")
        dorzuc.appendChild(dodaj_tab)
        console.log(dodaj_tab)
        for (let i=0;i<wiersze;i++){    
            var dodaj_wiersz = document.createElement("tr")
            var value = document.createTextNode("")
            dodaj_wiersz.appendChild(value)
            var dorzuc = document.getElementById("zadanie4")
            dorzuc.appendChild(dodaj_wiersz)
            console.log(dodaj_wiersz)       
            for(let j=0;j<kolumny;j++){
                var dodaj_kolumne = document.createElement("td")
                var value_k = document.createTextNode(Math.floor(Math.random()*100+1))
                dodaj_kolumne.appendChild(value_k)
                var dorzuc = document.getElementById("zadanie4")
                dorzuc.appendChild(dodaj_kolumne)    
                dodaj_kolumne.style.border = "0.5px solid grey"
                dodaj_kolumne.style.padding = "20px"
            }
        }
        let kolekcja_kolumn = document.getElementsByTagName("td");
        let min_value = minimum(kolekcja_kolumn)
        let max_value = maksimum(kolekcja_kolumn)
        for (let i=0; i<kolekcja_kolumn.length;i++){
            if((parseInt(kolekcja_kolumn[i].innerHTML))==min_value){
                kolekcja_kolumn[i].style.background = "green";    
            }
            else{
                kolekcja_kolumn[i].style.color = "black";    
            }
            if((parseInt(kolekcja_kolumn[i].innerHTML))==max_value){
                kolekcja_kolumn[i].style.background = "red";    
            }
            else{
                kolekcja_kolumn[i].style.color = "black";    
            }
            if(parzysta(parseInt(kolekcja_kolumn[i].innerHTML))==true){
                kolekcja_kolumn[i].style.fontWeight = "bold";    
            }
            else{
                kolekcja_kolumn[i].style.fontWeight = "normal";    
            }
        }   
    }
}

function parzysta(value){
    return (value%2==0) 
} 

function minimum(tab){
   let min = parseInt(tab[0].innerHTML)
   let liczba_komorek = tab.length
   for (let i=0; i<liczba_komorek;i++){
        if (min>parseInt(tab[i].innerHTML)){
                min = parseInt(tab[i].innerHTML)
        }
   }
   return(min)
}

function maksimum(tab){
    let max = parseInt(tab[0].innerHTML)
    let liczba_komorek = tab.length
    for (let i=0; i<liczba_komorek;i++){
        if (max<parseInt(tab[i].innerHTML)){
                max = parseInt(tab[i].innerHTML)
        }
    }
    return(max)
 }
 
 //Zadanie 5
 var kolejka=[]
 var liczba_osob_nowych=0
 var liczba_osob_obsluzonych
 var historia=[]
 function nowy_klient(){
    if (kolejka.length>=10){
        liczba_osob_nowych++
        alert("Dla klienta "+liczba_osob_nowych+" nie ma miejsca w kolejce!")
    }
    else{
        liczba_osob_nowych++
        kolejka.push(liczba_osob_nowych)
        console.log(kolejka.length)
        document.getElementById("stan_kolejki").innerHTML="Aktualny stan kolejki: "+kolejka +"</br></br>"
    }
    liczba_osob_obsluzonych=kolejka.length

    tekst = "Klient "+liczba_osob_nowych+" pojawił się o godzinie " +data()+"</br>"
    console.log("Tekst: "+tekst)
    historia.unshift(tekst)
    document.getElementById("historia").innerHTML=historia
    console.log("Tablica wpisów z historią: "+historia)
}

 function obsluz_klienta(){
    console.log("Liczba w kolejce: "+liczba_osob_nowych)
    console.log("Liczba do obsłużenia: "+liczba_osob_obsluzonych)
    console.log("Długość kolejki: "+ kolejka.length)
    if ( liczba_osob_obsluzonych<=0){
        alert("Kolejka jest pusta. Nie ma kogo obsłużyć!")
    }
    else{
        var usuwana_wartosc = kolejka[0]
        console.log("Usuwana wartość: "+usuwana_wartosc)
        kolejka.shift()
        liczba_osob_obsluzonych--
        console.log(kolejka.length)    
        document.getElementById("stan_kolejki").innerHTML="Aktualny stan kolejki: "+kolejka +"</br></br>"
        console.log(kolejka)
        tekst = "Klient "+usuwana_wartosc+"  został obsłużony o godzinie " +data() +"</br>"
        console.log("Tekst: "+tekst)
        historia.unshift(tekst)
        console.log("Tablica wpisów z historią: "+historia)
        document.getElementById("historia").innerHTML=historia
    }
 }