let buttonSim = document.querySelector('.buttonSim')
buttonSim.addEventListener('click',()=>{

    document.querySelector('h2').innerHTML = 'I LOVE YOU'
    document.querySelector('.buttons').style.display='none'
    document.querySelector('.inputs').style.display ='block'
    document.querySelector('.login').style.display='flex'

})

let buttonNao = document.querySelector('.buttonNao')
buttonNao.addEventListener('click',()=>{
    
document.querySelector('.sim').style.display='flex'
document.querySelector('.buttons').style.display='none'
document.querySelector('.buttonReturn').style.display='flex'

document.querySelector('.buttonReturn').addEventListener('click', ()=>{
window.location.reload()


})

})


 document.querySelector('.login').addEventListener('click',()=>{


  let email = document.querySelector('.inputText').value
  let passWord = document.querySelector('.inputPassword').value
   
   if(email == 'meunamoradoegostoso@gmail.com' & passWord == 'amomeunamorado'){
    window.open("nextpage.html", "_self")
    

   }else{
    document.querySelector('.errouSenha').style.display ='block'
   }

  


})






