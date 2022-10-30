function submitPet(){
    let pet = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        weight: document.getElementById('weight').value,
        type: document.getElementById('type').value,
        like: document.getElementById('like').value,
    }

    let petJson = JSON.stringify(pet);

    console.log(pet)
    console.log(petJson)


}