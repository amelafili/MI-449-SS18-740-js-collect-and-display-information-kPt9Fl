var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var emailInp = document.getElementById('email')
var phoneInp = document.getElementById('tel')
var desInp = document.getElementById('description')
var raw = document.getElementById('rawID')
var preview = document.getElementById('preview')

function updateprofile () {
  var first = document.getElementById('live-update').innerHTML = firstName.value
  var last = lastName.value
  var email = emailInp.value
  var tel = phoneInp.value
  var desc = desInp.value
  var result = 'Hi, my name is' + first + last + 'If youre interested in a date, you can email me at' + email + 'or give me a call at' + tel
  return result
}

firstName.addEventListener('input', updateprofile())

lastName.addEventListener('input', updateprofile())

emailInp.addEventListener('input', updateprofile())

phoneInp.addEventListener('input', updateprofile())

phoneInp.addEventListener('input', updateprofile())

document.getElementById('profile')

function finalpreview () {
  document.getElementById('first-name').innerHTML = firstName.value
  document.getElementById('last1').innerHTML = lastName.value
}
