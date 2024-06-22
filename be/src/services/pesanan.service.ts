import authModel from "../models/auth.model";
import pesananModel from "../models/pesanan.model";

export const getAllPesanan = async () => {
  return await pesananModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPesananById = async (id: string) => {
  return await pesananModel.findOne({ pesanan_id: id });
};

export const createPesanan = async (payload: any) => {
  try {
    return await pesananModel.create(payload);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create pesanan");
  }
};

export const getPesananByUserId = async (
  pemesan_id: string,
  user_id: string
) => {
  try {
    const userPesananId = await pesananModel.findOne({
      user_id: user_id,
    });
    const userId = await authModel.findOne({ user_id: user_id });

    if (userId && userPesananId && userPesananId.user_id === pemesan_id) {
      return await pesananModel
        .find({ user_id: user_id })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    } 
  } catch (error) {
    console.log(error);
  }
};
export const getPesananAndDelete = async (id: string) => {
  try {
    return await pesananModel.findOneAndDelete({ pesanan_id: id });
  } catch (error) {
    throw error;
  }
};