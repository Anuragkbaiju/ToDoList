function validateLogin() {
 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

 
    if (username === "admin" && password === "12345") {
    
        window.location.href = "todos.html";
    } else {
  
        errorMessage.textContent = "Invalid username or password!";
    }
}
