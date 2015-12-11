var kelimeler = new Array('kütüphane','koleksiyon','veri tabanı','açık erişim','otomasyon','issn','isbn','açık ders malzemeleri'); 
 var kelimeSayisi = kelimeler.length; 
 var secilenKelimeNo = Math.floor(Math.random() * kelimeSayisi); 
 var secilenKelime = kelimeler[secilenKelimeNo]; 
 var harfSayisi = secilenKelime.length; 
 
 
 var harfTutucu = new Array(); 
 
 
 for (var j=0; j<harfSayisi; j++){ 
         harfTutucu[j] = ' _ '; 
         harfTutucu[secilenKelime.indexOf(' ',j)] = ' - '; 
} 
 
 
 function harfKontrol(secilenHarf){ 
     for (var i=0; i<harfSayisi; i++){ 
         bulunanHarfNo = secilenKelime.indexOf(secilenHarf,i); 
         harfTutucu[bulunanHarfNo] = secilenHarf; 
         document.getElementById("harfTutucuGoster").innerHTML = harfTutucu.join('&nbsp'); 
     } 
 } 
