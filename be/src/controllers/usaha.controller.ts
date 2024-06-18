import { Request, Response } from "express";
import {
  getAllUsaha,
  getUsahaAndUpdate,
  getUsahaById,
  getUsahaByJenisUsaha,
  getUsahaByPengusahaId,
  getUsahaFoto,
  getusahaAndDelete,
  insertUsaha,
} from "../services/usaha.service";
import { v4 as uuidv4 } from "uuid";

export const getUsaha = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    if (id) {
      const usaha = await getUsahaById(id);
      if (usaha) {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "Get detail data usaha successfully",
          data: usaha,
        });
      } else {
        return res.status(404).send({
          status: false,
          status_code: 404,
          message: "No usaha found",
          data: {},
        });
      }
    } else {
      const usaha = await getAllUsaha();
      if (Array.isArray(usaha) && usaha.length > 0) {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "Get data usaha success",
          data: usaha,
        });
      } else {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "No usaha found",
          data: [],
        });
      }
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      status_code: 500,
      message: "Internal Server Error",
      data: {},
    });
  }
};

export const getUsahaByPengusaha = async (req: Request, res: Response) => {
  const { pengusaha_id, user_id } = req.params;

  try {
    const usaha = await getUsahaByPengusahaId(pengusaha_id, user_id);

    if (Array.isArray(usaha) && usaha.length > 0) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get data usaha by user id success",
        data: usaha,
      });
    } else {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "No usaha posted",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getJenisUsaha = async (req: Request, res: Response) => {
  const { jenis_usaha } = req.body;

  try {
    const usaha = await getUsahaByJenisUsaha(jenis_usaha);
    if (Array.isArray(usaha) && usaha.length > 0) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get data usaha success",
        data: usaha,
      });
    } else {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "No usaha found",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      status_code: 500,
      message: "Internal Server Error",
      data: {},
    });
  }
};

export const createUsaha = async (req: Request, res: Response) => {
  const usaha_id = uuidv4();
  const {
    pengusaha_id,
    nama_usaha,
    deskripsi_usaha,
    jenis_usaha,
    alamat_usaha,
    foto_usaha,
    harga,
    fasilitas,
  } = req.body;

  if (
    !pengusaha_id ||
    !nama_usaha ||
    !deskripsi_usaha ||
    !jenis_usaha ||
    !alamat_usaha ||
    !foto_usaha ||
    !fasilitas ||
    !harga
  ) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "All fields are required",
    });
  }

  try {
    const usahaData = {
      usaha_id,
      pengusaha_id,
      nama_usaha,
      deskripsi_usaha,
      jenis_usaha,
      alamat_usaha,
      foto_usaha,
      harga,
      fasilitas,
    };

    await insertUsaha(usahaData);
    return res.status(200).json({
      status: true,
      status_code: 200,
      message: "Usaha created successfully",
      data: usahaData,
    });
  } catch (error) {
    console.error("Error inserting usaha:", error);
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error,
    });
  }
};

export const updateUsaha = async (req: Request, res: Response) => {
  const id = req.params.id;

  const {
    pengusaha_id,
    nama_usaha,
    deskripsi_usaha,
    jenis_usaha,
    alamat_usaha,
    foto_usaha,
    harga,
    fasilitas,
  } = req.body;

  if (
    !pengusaha_id ||
    !nama_usaha ||
    !deskripsi_usaha ||
    !jenis_usaha ||
    !alamat_usaha ||
    !fasilitas ||
    !harga
  ) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "All fields are required",
    });
  }

  try {
    const fotoPrevious = foto_usaha || (await getUsahaFoto(id));

    const usahaData = {
      pengusaha_id,
      nama_usaha,
      deskripsi_usaha,
      jenis_usaha,
      alamat_usaha,
      foto_usaha: fotoPrevious,
      harga,
      fasilitas,
    };

    const updatedUsaha = await getUsahaAndUpdate(id, usahaData);
    if (updatedUsaha) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Usaha updated successfully",
        data: updatedUsaha,
      });
    } else {
      return res.status(404).json({
        status: false,
        status_code: 404,
        message: "Data not found",
        data: {},
      });
    }
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message || "An error occurred",
      data: {},
    });
  }
};

export const deleteUsaha = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await getusahaAndDelete(id);
    if (result) {
      res.status(200).json({
        status: true,
        status_code: 200,
        message: "Delete usaha successfully",
      });
    } else {
      res.status(404).json({
        status: false,
        status_code: 404,
        message: "Data not found",
        data: {},
      });
    }
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message,
    });
  }
};
