const users = [];

function signup() {
  const username = document.getElementById("username").value;
  const fullName = document.getElementById("fullName").value;
  const password = document.getElementById("password").value;
  const sex = document.getElementById("sex").value;
  const dob = document.getElementById("dob").value;

  const newUser = { username, fullName, password, sex, dob };
  users.push(newUser);

  console.log("User signed up:", newUser);

  window.location.href = "login.html";
}
function cancelSignup() {
  document.getElementById("username").value = "";
  document.getElementById("fullName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("sex").value = "male";
  document.getElementById("dob").value = "";
}

function login() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const user = users.find(
    (u) => u.username === loginUsername && u.password === loginPassword
  );

  if (user) {
    console.log("Login successful:", user);
  } else {
    alert("Invalid username or password");
  }
}
