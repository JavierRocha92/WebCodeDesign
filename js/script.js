const signup = document.getElementById('signup')
const login = document.getElementById('login')
const login__button = document.getElementById('login__button')
const signup__button = document.getElementById('signup__button')
const container__forms = document.getElementById('container__forms')




const removeForm = (form_1,form_2) => {
    form_1.classList.remove('form__rotate-appear')
    form_1.classList.add('form__rotate-desappear')
    setTimeout(() => {
        form_2.classList.remove('form__rotate-desappear')
        form_2.classList.add('form__rotate-appear')
    },400)
}
const detectForm = (event) => {
    const e = event.target
    const form = e.parentElement.parentElement
    if(form.id === 'signup')
    removeForm(signup,login)
    if(form.id === 'login')
    removeForm(login,signup)
}
container__forms.addEventListener('click',detectForm)