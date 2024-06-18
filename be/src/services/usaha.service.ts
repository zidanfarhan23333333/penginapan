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

export const getUsahaById = async (id: string) => {
  return await usahaModel.findOne({ usaha_id: id });
};

export const getUsahaAndUpdate = async (id: string, payload: any) => {
  return await usahaModel.findOneAndUpdate(
    {
      usaha_id: id,
    },
    {
      $set: payload,
    }
  );
};

export const insertUsaha = async (payload: any) => {
  return await usahaModel.create(payload);
};

export const getusahaAndDelete = async (id: string) => {
  try {
    return await usahaModel.findOneAndDelete({ usaha_id: id });
  } catch (error) {
    throw error;
  }
};

export const getUsahaFoto = async (id: string) => {
  const usaha = await usahaModel.findOne({ id });
  const usahaFoto = usaha?.foto_usaha;
  return usahaFoto;
};

export const getUsahaByJenisUsaha = async (jenis_usaha: string) => {
  try {
    const result = await usahaModel.find({
      jenis_usaha: jenis_usaha,
    });
    return result;
  } catch (error) {
    console.error("Database Query Error: ", error); // Log error
    throw error;
  }
};

export const getUsahaByPengusahaId = async (
  pengusaha_id: string,
  user_id: string
) => {
  try {
    const userVideId = await usahaModel.findOne({
      pengusaha_id: pengusaha_id,
    });
    const userId = await authModel.findOne({ user_id: user_id });

    if (userId && userVideId && userVideId.pengusaha_id === pengusaha_id) {
      return await usahaModel
        .find({ pengusaha_id: pengusaha_id })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return await usahaModel
        .find({ pengusaha_id: pengusaha_id })
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
