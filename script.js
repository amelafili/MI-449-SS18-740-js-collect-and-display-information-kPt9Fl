var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var desInput = document.getElementById('description')
var raw = document.getElementById('rawID')
var preview = document.getElementById('preview')

var updateProfile = function () {
  var first = firstName.value
  var firstInput = document.getElementById('first1')
  var firstInput1 = document.getElementById('rawfirst')
  firstInput.innerHTML = first
  firstInput1.textContent = first
  var last = lastName.value
  var lastInput = document.getElementById('last1')
  lastInput.innerHTML = last
  var description = desInput.value
  var descrip = document.getElementById('descrip')
  var descrip2 = document.getElementById('rawdescr')
  descrip.innerHTML = description
  descrip2.textContent = description
  var email = emailInput.value
  var email1 = document.getElementById('email1')
  var email2 = document.getElementById('rawemail')
  email1.innerHTML = email
  email2.textContent = email
  var phone = phoneInput.value
  var phone1 = document.getElementById('phone1')
  var phone2 = document.getElementById('rawphone')
  phone1.innerHTML = phone
  phone2.textContent = phone

  preview.innerHTML =
  '<h1> Hi, my name is ' +
  first + last +
  description + '</h1><p>If youre interested in a date, you can email me at' +
  email + 'or give me a call at</p>' +
  phone

  raw.textContent = '<h1> Hi, my name is' +
  first + last + description +
  'If youre interested in a date, you can email me at' +
  email + 'or give me a call at </h1>' +
  phone
}

firstName.addEventListener('input', updateProfile)
lastName.addEventListener('input', updateProfile)
desInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)
