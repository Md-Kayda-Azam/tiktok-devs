import bcrypt from "bcryptjs";

/**
 * hash password
 */
export const hashPassowrd = (password) => {
  // salt genSaltSync
  const salt = bcrypt.genSaltSync(12);
  const pass = bcrypt.hashSync(password, salt);

  return pass;
};

/**
 * password match
 * @param {*} password
 * @param {*} hash
 * @returns
 */
export const varifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
