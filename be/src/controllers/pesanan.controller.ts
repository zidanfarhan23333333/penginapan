import { Request, Response } from "express";
import { getAllPesanan, createPesanan, findPesananByUser, deletePesanan } from "../services/pesanan.service";

export const getAllPesananController = async (req: Request, res: Response) => {
  try {
    const data = await getAllPesanan();
    res.status(200).json({ success: true, data });
  } catch (error: any) { // Explicitly define error type as 'any' or specific error type
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createPesananController = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const newPesanan = await createPesanan(payload);
    res.status(201).json({ success: true, data: newPesanan });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const findPesananByUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = await findPesananByUser(userId);
    res.status(200).json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deletePesananController = async (req: Request, res: Response) => {
  try {
    const { pesananId } = req.params;
    await deletePesanan(pesananId);
    res.status(200).json({ success: true, message: "Pesanan deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
