/**
 * user name validate
 */
export const usernameValidate = (username) => {
  return username.match(/^[a-z0-9_-][^A-Z]*$/);
};

/**
 * Email Validate
 */
export const isEmail = (email) => {
  return email
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
