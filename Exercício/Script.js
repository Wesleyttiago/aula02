let imagens = [
    "https://i.pinimg.com/736x/30/9c/e6/309ce66fb8043ff492176b7b747bb79a.jpg",
    "https://i.pinimg.com/736x/6d/6c/7c/6d6c7cfb8073a09c3aa3ccea39ae5d7e.jpg",
    "https://i.pinimg.com/736x/22/29/29/2229299b41dcff3cb2f627672e9374a8.jpg",
    "https://i.pinimg.com/736x/67/bd/a7/67bda7236c8c00044662160f730b43d4.jpg",
    "https://i.pinimg.com/736x/69/03/44/69034433a227b5c869483bd51a62fc93.jpg",
    "https://i.pinimg.com/736x/be/46/9b/be469b289ee685865bffe1a20239c7ee.jpg"
];

let indice = 0;

function trocarImagem() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    document.getElementById("imagem").src = imagens[indice];
}