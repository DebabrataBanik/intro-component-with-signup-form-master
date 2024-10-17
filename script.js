const form = document.querySelector("form");
const name_inputs = document.querySelectorAll(".name")
const email = document.querySelector(".email")
const pw = document.querySelector(".password")

// form.addEventListener("submit", (e) => {
//   e.preventDefault()

//   const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   name_inputs.forEach(name => {
//     if (name.value === "") {
//       name.parentElement.querySelector(".error-msg").style.display = "block"
//       name.parentElement.querySelector(".error-icon").style.display = "block"
//     }
//     else {
//       name.parentElement.querySelector(".error-msg").style.display = "none"
//       name.parentElement.querySelector(".error-icon").style.display = "none"
//     }
//   })

//   if (email.value === "") {
//     email.parentElement.querySelector(".error-msg").style.display = "block"
//     email.parentElement.querySelector(".error-msg").textContent = "Email cannot be empty"
//     email.parentElement.querySelector(".error-icon").style.display = "block"
//   } else if (!email_regex.test(email.value)) {
//     email.parentElement.querySelector(".error-msg").style.display = "block"
//     email.parentElement.querySelector(".error-msg").textContent = "Looks like this is not an email"
//     email.parentElement.querySelector(".error-icon").style.display = "block"
//     email.classList.add("error")
//   } else {
//     email.parentElement.querySelector(".error-msg").style.display = "none"
//     email.parentElement.querySelector(".error-icon").style.display = "none"
//     email.classList.remove("error")
//   }

//   if (pw.value === "") {
//     pw.parentElement.querySelector(".error-msg").style.display = "block"
//     pw.parentElement.querySelector(".error-icon").style.display = "block"
//   } else {
//     pw.parentElement.querySelector(".error-msg").style.display = "none"
//     pw.parentElement.querySelector(".error-icon").style.display = "none"
//   }

// })


form.addEventListener("submit", e => {
  e.preventDefault()

  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const showError = (input, msg) => {

    const errorMsg = input.parentElement.querySelector(".error-msg")
    const errorIcon = input.parentElement.querySelector(".error-icon")

    if (msg) {
      errorMsg.textContent = msg
      errorMsg.classList.add('visible')
      errorIcon.classList.add('visible')
      input.classList.add('error')
    }
    else {
      errorMsg.classList.remove('visible')
      errorIcon.classList.remove('visible')
      input.classList.remove('error')
    }
  }

  name_inputs.forEach(name => {
    if (name.value === "") {
      showError(name, `${name.id} cannot be empty`)
    } else {
      showError(name)
    }
  })

  if (email.value === "") {
    showError(email, "Email cannot be empty")
  } else if (!email_regex.test(email.value)) {
    showError(email, "Looks like this is not an email")
  } else {
    showError(email)
  }

  if (pw.value === "") {
    showError(pw, "Password cannot be empty")
  } else {
    showError(pw)
  }
})