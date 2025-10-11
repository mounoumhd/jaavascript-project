const myarray=["banane","pomme","cerise","4"]
console.log(myarray,"mon tableau de fruits")
myarray.length
console.log(myarray[0])
console.log (myarray[1])
myarray[1]="orange"
console.log (myarray)
console.log("la longueur de mon tableaux est de:",myarray.length)
const cars = new Array ("mercedes","amborghini","fiat","range rover")
console.log(cars,"tableaux de voitures ")

//comment copier un tableau 
const nombres =["2","3","4"]
console.log(nombres)
const Copienombres=[...nombres]
console.log("la copie de mon tableau est :",Copienombres)

const tab=["1",...nombres,"5"]
console.log(tab)
 console.log(myarray.toString())
 console.log(myarray.join("/"))
 //pop pour supprimer le dernier elements du tableau
let voitures=cars.pop ()
console.log(voitures)
console.log(cars)
//push pour ajouter un dernier element au tableau
let fruits=myarray.push("kiwi")
console.log(fruits)
console.log(myarray)
const boys=["amine","yacine","ramy"]
const girls=["mounia","asma","maya"]
console.log(boys)
console.log(girls)
const children= boys.concat(girls)
console.log(children)
let semaine=["lun","mra","mer","jeu","ven","sam","dim"]
console.log(semaine)
let semaine1=semaine.pop()
console.log(semaine)
let semaine2=semaine.push("dim")
console.log(semaine2)
semaine2[1]="mar"
console.log(semaine2)
console.log("la longueur de mon tableau est de :",semaine.length)

const fruitssplice=["banane","orange","pomme","mangue"]
console.log(fruitssplice)
fruitssplice.splice(2,0,"citron","kiwi")
console.log(fruitssplice)
fruitssplice.fruitssplice(3,2) 
console.log(fruitssplice)

const fruitsSlices=["orange","banane","citron","pomme"]
const sliceX=fruitsSlices.slice(2) 
console.log(sliceX)
console.log(fruitsSlices)
const fruitsY=["orange","banane","citron","pomme"]
const sliceY=fruitsY.slice(1,3)
console.log(sliceY)
console.log(fruitsY)



