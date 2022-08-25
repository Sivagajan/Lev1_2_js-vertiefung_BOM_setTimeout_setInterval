console.log('Siva')

const btn = document.getElementById('btn')
const zeit = document.querySelector('.zeit')
let counter
let myInterval

console.log(zeit)

btn.addEventListener('click', () =>{
    counter = 100
    btn.innerHTML='Start'
    myInterval = setInterval(percentCounter,100)
})



const percentCounter = () => {

    if(counter === 0){
        console.log('Feierabend')
        clearInterval(myInterval)
        btn.innerHTML='Click again'
    }else{
        console.log(counter)

        counter -=1
        zeit.innerHTML = counter+'%'
    }
}