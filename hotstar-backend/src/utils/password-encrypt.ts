import bcryptjs from "bcryptjs";

const hashPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
};

const comparePassword = (inputPassword: string, password: string) => {
  return bcryptjs.compare(inputPassword, password);
};

export const passwordCheck = {
  hashPassword,
  comparePassword,
};
