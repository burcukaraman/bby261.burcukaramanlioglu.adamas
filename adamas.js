var kelimeler = new Array('kütüphane','koleksiyon','veri tabanı','açık erişim','otomasyon','issn','isbn','açık ders malzemeleri'); 
 var kelimeSayisi = kelimeler.length; 
 var secilenKelimeNo = Math.floor(Math.random() * kelimeSayisi); 
 var secilenKelime = kelimeler[secilenKelimeNo]; 
 var harfSayisi = secilenKelime.length; 
 var hataSayisi = 0
 
 var harfTutucu = new Array(); 


 for (var j=0; j<harfSayisi; j++){ 
         harfTutucu[j] = ' _ '; 
         harfTutucu[secilenKelime.indexOf(' ',j)] = ' - '; 
} 
 
 
 function harfKontrol(secilenHarf){ 
//     for (var i=0; i<harfSayisi; i++){ 
         bulunanHarfNo = secilenKelime.indexOf(secilenHarf); 
         if (bulunanHarfNo == -1){
          hataliysa_ara()   
         } else {
         harfTutucu[bulunanHarfNo] = secilenHarf; 
         document.getElementById("harfTutucuGoster").innerHTML = harfTutucu.join('&nbsp');
         }
    // } 
 } 

function hataliysa_ara(){
hataSayisi += 1
console.log(hataSayisi)
if (hataSayisi == 3){
console.log("Vurun kellesini")
document.getElementById('klavye').innerHTML="Klavye yerine bu yazı geldi"
}
adamAs()
}

function adamAs(){
	switch(hataSayisi) {
    	case 0:
        	document.getElementById('adam').src="adamasmaca1.fw.png"
        break;
    	case 1:
        	document.getElementById('adam').src="adamasmaca2.fw.png"
        break;
			case 2:
					document.getElementById('adam').src="adamasmaca3.fw.png"
				break;
			case 3:
					document.getElementById('adam').src="adamasmaca4.fw.png"
				break;
	}
}