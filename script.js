var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var desInput = document.getElementById('description')
var raw = document.getElementById('rawID')
var preview = document.getElementById('preview')

function updateProfile () {
  var first = firstName.value
  var last = lastName.value
  var description = desInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var paragraph =
  '<h1>Hi, my name is ' +
    first + ' ' + last + ' </h1>' +
    '<p>' + description + '</p>' +
    '<p> If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '">' + email + '</a>' +
    ' or give me a call at ' +
    '<a href="tel:' + phone + '">' + phone + '</a>' + '</p>'
  preview.innerHTML = paragraph
  raw.textContent = paragraph
}

firstName.addEventListener('input', updateProfile)
lastName.addEventListener('input', updateProfile)
desInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)
