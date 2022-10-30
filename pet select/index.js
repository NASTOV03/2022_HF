var pets = {};
var XMLHttpRequest = require('xhr2');
var a = new XMLHttpRequest();
a.open("GET","pets.json",true);
a.onreadystatechange = function (){
    if( this.readyState == 4){
        if(this.status == 200){
            const petsData=(window.JSON?JSON.parse(this.responseText):eval("("+this.responseText+")"));
            pets = JSON.parse(JSON.stringify(petsData))
            const arr = Object.keys(petsData);
            var datalist = document.getElementById('petName');
            arr.forEach(function(item){
                var option = document.createElement('option');
                option.value=item;
                datalist.appendChild(option);
            })
            document.getElementById('pets').dataset=arr

        }else{
            alert("HTTP error "+this.status+ " "+this.statusText);
        }
    }
}
a.send();

function getPetDetails(){
    var inp = document.getElementById('pets');
    const pet = inp.value;
    const petData = pets[pet]
    console.log(petData)
    document.getElementById('name').value=petData.name;
    document.getElementById('age').value=petData.age;
    document.getElementById('weight').value=petData.weight;
    document.getElementById('type').value=petData.type;
    document.getElementById('like').value=petData.like;
    document.getElementsByClassName('form')[0].style.display='block';
}