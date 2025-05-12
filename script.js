// løs opgaverne her

//Opgave 1
let dog1 =  dogs[1]
let dog2 = dogs[2]

console.log(dog1, dog2);


//Opgave 2
const catName = cat.name;
const catBreed = cat.breed;
const catMail = cat.owner.contact;

console.log(catName, catBreed, catMail);

//Opgave 3
function individualData({name, favoriteToys}){
    console.log(name, favoriteToys);
}
individualData(cat)