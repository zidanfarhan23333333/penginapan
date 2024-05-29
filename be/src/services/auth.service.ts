import authModel from "../models/auth.model";

export const createUser = async (payload: any) => {
  return await authModel.create(payload);
};

export const findUserByEmail = async (email: string) => {
  return await authModel.findOne({ email });
};

export const getPassword = async (email: string) => {
  const user = await authModel.findOne({ email });
  const password = user?.password;
  return password;
};

export const updateUserPassword = async (
  email: string,
  newPassword: string
) => {
  try {
    await authModel.updateOne({ email }, { password: newPassword });
  } catch (error) {
    throw new Error("failed to update password");
  }
};
