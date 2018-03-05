var firstName = document.getElementById('first-name')
firstName.onkeyup = function () {
  document.getElementById('first1').innerHTML = firstName.value
}

var lastName = document.getElementById('last-name')
lastName.onkeyup = function () {
  lastName = document.getElementById('last1').innerHTML = lastName.value
}

var email = document.getElementById('email')
email.onkeyup = function () {
  document.getElementById('email1').innerHTML = email.value
}

var phone = document.getElementById('tel')
phone.onkeyup = function () {
  document.getElementById('phone1').innerHTML = phone.value
}

var descr = document.getElementById('description')
descr.onkeyup = function () {
  document.getElementById('descrip').innerHTML = descr.value
}
