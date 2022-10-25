let form = document.getElementById('login-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let formData = {
    username: form.username.value,
    password: form.password.value,
  }

  fetch('http://127.0.0.1:8000/api/users/token/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.access) {
        localStorage.setItem('find-devs-token', data.access)
        window.location = '/project-list.html'
      } else {
        alert('Invalid credentials')
      }
    })
})
