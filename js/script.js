const button = document.getElementById('button')
const caja = document.getElementById('caja')


button.addEventListener('click',()=> {
    if(caja.classList.contains('mover')){
        caja.classList.remove('mover')
        caja.classList.add('dejar')
    }else{
        caja.classList.add('mover')
        caja.classList.remove('dejar')
    }
})