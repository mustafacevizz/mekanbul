var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next) {
    res.render('anasayfa', 
    {  "baslik": 'Ana Sayfa',
    "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Barida Kafe",
            "adres":"Sdü Batı Kampüsü",
            "puan":"4",
            "mesafe":"2km",
            "imkanlar":["Kahve","Çay","Pasta"]
        },
        {
            "ad":"Gloria",
            "adres":"Sdü Doğu Kampüsü",
            "puan":"2",
            "mesafe":"5km",
            "imkanlar":["Kahve","Çay","Pasta"]
        },
    ]
});
}
const mekanBilgisi=function(req,res,next) {
    res.render('mekanbilgisi',
    {  "baslik": 'Mekan Bilgisi',
        "mekanBaslik":"Starbucks",
        "mekanDetay":{
            "ad":"Starbucks",
            "adres":"Centrum Garden AVM",
            "puan":"4",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
            "koordinatlar":{
                "enlem":"37.7",
                "boylam":"30.5"
            },
            "saatler":[
                {
                    "gunler":"Pazartesi-Cuma",
                    "acilis":"09:00",
                    "kapanis":"23:00",
                    "kapali": false
                },
                {
                    "gunler":"Cumartesi-Pazar",
                    "acilis":"09:00",
                    "kapanis":"22:00",
                    "kapali": false
                }
            ],
            "yorumlar":[
                {
                    "yorumYapan":"Mustafa CEVİZ",
                    "puan":"4",
                    "tarih":"22 Ekim 2022",
                    "yorumMetni":"Kahveler iyi."
                }
            ]
        }
        
});
}
const yorumEkle=function(req,res,next) {
    res.render('yorumekle', {  "title": 'Yorum Ekle'});
}



module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}