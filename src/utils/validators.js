export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const validateName = (name) => name.trim().length > 0;
