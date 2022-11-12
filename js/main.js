const form = document.querySelector("form")
const personalNumber = document.querySelector("#personal-number")
const mobileNumber = document.querySelector("#mobile-number")
const jobDescription = document.querySelector("#job-description")

const errorPersonalNumber = document.querySelector(".error-personal-number")
const errorMobileNumber = document.querySelector(".error-mobile-number")
const jobDescriptionError = document.querySelector(".job-description-error")


let isPersonalNumberValid = false
let isMobileNumberValid = false
let isJobDescriptionValid = false

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  
    if (personalNumber.value.length > 11)  {
      personalNumber.classList.add("error")
      personalNumber.classList.remove("correct")
      errorPersonalNumber.innerText = "არ უნდა აღემატებოდეს 11 სიმბოლოს!"
      isPersonalNumberValid = false
    } else if (!personalNumber.value.length <= 11 && !personalNumber.value.length < 1) {
      errorPersonalNumber.innerText = ""
      personalNumber.classList.add("correct")
      personalNumber.classList.remove("error")
      isPersonalNumberValid = true
    } else {
      errorPersonalNumber.innerText = "გთხოვთ შეიყვანოთ თქვენი მონაცემები"
      personalNumber.classList.add("error")
      personalNumber.classList.remove("correct")
      isPersonalNumberValid = false
    }

    if (mobileNumber.value.length > 9) {
      mobileNumber.classList.add("error")
      mobileNumber.classList.remove("correct")
      errorMobileNumber.innerText = "არ უნდა აღემატებოდეს 9 სიმბოლოს!"
      isMobileNumberValid = false
    }else if (!mobileNumber.value.length <= 9 && !mobileNumber.value.length < 1) {
      errorMobileNumber.innerText = ""
      mobileNumber.classList.add("correct")
      mobileNumber.classList.remove("error")
      isMobileNumberValid = true
    } else {
      errorMobileNumber.innerText = "გთხოვთ შეიყვანოთ თქვენი მონაცემები"
      mobileNumber.classList.add("error")
      mobileNumber.classList.remove("correct")
      isMobileNumberValid = false
    }

    if (jobDescription.value.length > 50) {
      jobDescription.classList.add("error")
      jobDescription.classList.remove("correct")
      jobDescriptionError.innerText = "არ უნდა აღემატებოდეს 50 სიმბოლოს!"
      isJobDescriptionValid = false
    }else if (jobDescription.value.length <= 50 && jobDescription.value.length > 0) {
      jobDescriptionError.innerText = ""
      jobDescription.classList.add("correct")
      jobDescription.classList.remove("error")
      isJobDescriptionValid = true
    } else {
      jobDescriptionError.innerText = "გთხოვთ შეიყვანოთ თქვენი მონაცემები"
      jobDescription.classList.add("error")
      jobDescription.classList.remove("correct")
      isJobDescriptionValid = false
    }
})

