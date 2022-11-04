var character = ""

transition = function(character){
    document.querySelector("h5").innerHTML = ``
    var alphabet = `abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(_)-=[];',./_+{}:"<>?|₫¢$€£¥₮৲৳௹฿៛₠₡₢₣₤₥₦₧₨₩₪₫₭₯₰₱₲₳₴₵￥﷼¤ƒ` 
    var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    var letters
    var data = character.split("")
    list = []

data.forEach((element,i) =>{
    letters = []
    rn = Math.floor((Math.random()*20))
    for(var i=0; i<rn+1;i++){
        var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        letters.push(randomCharacter)
    }
    if(element === " "){
        letters.push("‎ ‎ ‎")
    }
    else{
        letters.push(element)
    }
    list.push(letters)
})+
list.forEach((element,i) => {
    document.querySelector("h5").innerHTML += `<span></span>`
    element.forEach((d,j) => {
    setTimeout(
        function(){
               
            document.querySelector(`#main span:nth-child(${i+1})`).textContent = d
            console.log(d)
        }
        , j * 90);
    });
});
}

document.querySelector("input").addEventListener("keydown",(data)=>{
    if(data.keyCode === 13){
        val = document.querySelector("input").value
        transition(val)
    }
})