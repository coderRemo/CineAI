export const checkValidData = (name, email, password) => {
  if (name != null) {
    const isName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name.trim());
    if (!isName) return "Invalid Name.";
  }
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email.trim());
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.trim());

  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
