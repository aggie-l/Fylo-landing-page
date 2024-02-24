const email = document.querySelector(".email-input")
const signUpBtn = document.querySelector(".start-btn")



const validateEmail = (email) => {
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let errorText = document.getElementById("error")
    if (email.value.match(regEx)) {
        email.value = ""
        errorText.style.visibility = "hidden"
      return true
    } else {
      errorText.style.visibility = "visible"
      return false
    }
}

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault()
    validateEmail(email)
})


