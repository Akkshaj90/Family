var namesoffam=[
    Hector,
    Akkshaj,
    Cressida,
    Anuj,
    Raj  
];
var imgfamily=[
    "https://static.simpsonswiki.com/images/thumb/2/2c/Santa%27s_Little_Helper.png/200px-Santa%27s_Little_Helper.png",
    "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
    "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest?cb=20201222215437",
    "https://upload.wikimedia.org/wikipedia/en/3/3e/Abe_Simpson.png"
];
function nextname(){
    document.getElementById(namesoffam).innerHTML=namesoffam[i];
    document.getElementById(pic).src=imgfamily[i]; i++;}
