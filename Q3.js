const users = [];

// Function to sign up the user
function signUp(username, password, operator) {
  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    console.log("User already exists. Please log in.");
    return;
  }

  // Create new user
  users.push({ username, password, operator });
  console.log("Signup successful!");
}

// Function to log in the user
function logIn(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    console.log("Invalid username or password.");
    return null;
  }
  
  console.log("Login successful!");
  return user;
}

// Function to perform calculation
function calculate(user, num1, num2) {
  switch (user.operator) {
    case 'Addition':
      return num1 + num2;
    case 'Subtraction':
      return num1 - num2;
    case 'Multiplication':
      return num1 * num2;
    default:
      console.log("Invalid operator.");
      return null;
  }
}

// Example usage:

// User signup
signUp("madhu", "password123", "Addition");
signUp("john", "pass456", "Multiplication");

// User login
const loggedInUser = logIn("madhu", "password123");

if (loggedInUser) {
  // Perform calculation after login
  const result = calculate(loggedInUser, 10, 5);
  console.log(`Result: ${result}`);
}

