const titre=document.getElementsByClassName("title")
console.log(titre,"la recuperation de tout les eleements qui contiennent le nom title")

const demo =document.getElementById("demo")
console.log(demo,"la recuperation de tout les elements dont le id est demo ")

const tag=document.getElementsByTagName("h2")
console.log(tag,"la recuperation de tout les elements dont le tag est he ")

document.getElementById("demo").style.color="red"
//demo.innerHTML="salut"
//demo.innerHTML="<h1> mon titre </h1>"
//demo.innerText="hello"

function salut(){
    console.log("bonjour!")
    if (demo.innerHTML=== "libre pour tout le monde ") {
        demo.innerHTML="bonjour tout le monde "
    }else{
        demo.innerHTML="libre pour tout le monde "
    }
}
demo.onclick = salut

const booklist=document.querySelectorAll("#listes-livres li .name")
console.log(booklist,"my book list")
const myselector=document.querySelector("#listes-livres li:nth-child(2) .name")
console.log(myselector,"mon selecteur")