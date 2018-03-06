var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var description = document.getElementById('description')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var rawParagraph = document.getElementById('rawID')

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

var rawfirstName = document.getElementById('first-name')
var rawlastName = document.getElementById('last-name')
var rawdescription = document.getElementById('description')
var rawemail = document.getElementById('email')
var rawphone = document.getElementById('phone')
var rawParagraph = document.getElementById('rawID')

rawfirstName.addEventListener('input', function () {
  var first = firstName.value
  var first1Input = document.getElementById('rawfirst')
  first1Input.textContent = first
})

rawlastName.addEventListener('input', function () {
  var last = lastName.value
  var last1Input = document.getElementById('rawlast')
  last1Input.textContent = last
})

rawdescription.addEventListener('input', function () {
  var descr1 = description.value
  var descr1Input = document.getElementById('rawdescr')
  descr1Input.textContent = descr1
})

email.addEventListener('input', function () {
  var email1 = email.value
  var emailInput = document.getElementById('rawemail')
  emailInput.textContent = email1
})

phone.addEventListener('input', function () {
  var phone1 = phone.value
  var phoneInput = document.getElementById('rawphone')
  phoneInput.textContent = phone1
})
