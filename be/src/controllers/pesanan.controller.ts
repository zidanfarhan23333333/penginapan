import { Request, Response } from "express";
import {
  getAllPesanan,
  createPesanan,
  getPesananByUserId,
  getPesananById,
  getPesananAndDelete,
} from "../services/pesanan.service";
import { v4 as uuidv4 } from "uuid";

export const getAllPesananController = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    if (id) {
      const usaha = await getPesananById(id);
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
      const usaha = await getAllPesanan();
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

export const createPesananController = async (req: Request, res: Response) => {
  const pesanan_id = uuidv4();
  const {
    user_id,
    usaha_id,
    no_telp,
    nama_usaha,
    jenis_usaha,
    alamat_usaha,
    foto_usaha,
  } = req.body;

  if (
    !user_id ||
    !usaha_id ||
    !no_telp ||
    !nama_usaha ||
    !jenis_usaha ||
    !alamat_usaha ||
    !foto_usaha
  ) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "All fields are required",
    });
  }
  try {
    const pesananData = {
      pesanan_id,
      user_id,
      usaha_id,
      no_telp,
      nama_usaha,
      jenis_usaha,
      alamat_usaha,
      foto_usaha,
    };

    await createPesanan(pesananData);
    return res.status(200).json({
      status: true,
      status_code: 200,
      message: "Pesanan created successfully",
      data: pesananData,
    });
  } catch (error) {
    console.error("Error inserting Pesanan:", error);
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error,
    });
  }
};

export const getPesananByUser = async (req: Request, res: Response) => {
  const { pemesan_id, user_id } = req.params;

  try {
    const usaha = await getPesananByUserId(pemesan_id, user_id);

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

export const deletePesanan = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await getPesananAndDelete(id);
    if (result) {
      res.status(200).json({
        status: true,
        status_code: 200,
        message: "Delete pesanan successfully",
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
