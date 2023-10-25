function validateInput() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const usernamePattern = /^[a-zA-Z0-9]+$/; // Only allows alphanumeric characters
  const passwordPattern = /^[a-zA-Z0-9@]+$/; // Allows alphanumeric characters and '@'

  if (!usernamePattern.test(username) || !passwordPattern.test(password)) {
    alert("Invalid Name or Password.");
    return false;
  }
  alert("Valid Name and Password.");
  return true;
}
