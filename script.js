var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var description = document.getElementById('description')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var rawparagraph = document.getElementById('rawID')

firstName.addEventListener('input', function () {
  var first = firstName.value
  var firstInput = document.getElementById('first1')
  firstInput.innerHTML = first
})

lastName.addEventListener('input', function () {
  var last = lastName.value
  var lastInput = document.getElementById('last1')
  lastInput.innerHTML = last
})

description.addEventListener('input', function () {
  var desc = description.value
  var descrInput = document.getElementById('descrip')
  descrInput.innerHTML = desc
})

email.addEventListener('input', function () {
  var email1 = email.value
  var emailInput = document.getElementById('email1')
  emailInput.innerHTML = email1
})

phone.addEventListener('input', function () {
  var phone1 = phone.value
  var phoneInput = document.getElementById('phone1')
  phoneInput.innerHTML = phone1
})
