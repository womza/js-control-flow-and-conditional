let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);


// Dietary Services
let person = "Employee";
let dietary_service_message;

switch (person) {
    case "Employee":
        dietary_service_message = "Authorized to Dietary Services.";
        break;
    case "Enrolled Member":
        dietary_service_message = "Authorized to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        dietary_service_message = "Partial access to to Dietary Services.";
        break;

    default:
        // Non-Subscriber
        dietary_service_message = "Need to enroll to avail service.";
        break;
}

console.log("Dietary Services:", dietary_service_message);