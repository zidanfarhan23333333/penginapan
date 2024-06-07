import usahaModel from "../models/usaha.model";
import authModel from "../models/auth.model";

export const getAllUsaha = async () => {
  return await usahaModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUsahaById = async (usaha_id: string) => {
  return await usahaModel.find({ usaha_id: usaha_id });
};

export const getBlogAndUpdate = async (id: string, payload: any) => {
  return await usahaModel.findOneAndUpdate(
    {
      blog_id: id,
    },
    {
      $set: payload,
    }
  );
};

export const insertChat = async (payload: any) => {
  return await usahaModel.create(payload);
};

export const getChatAndDelete = async (id: string) => {
  try {
    return await usahaModel.findOneAndDelete({ chat_id: id });
  } catch (error) {
    throw error;
  }
};
