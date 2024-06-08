import mongoose from "mongoose";

const usahaSchema = new mongoose.Schema(
  {
    usaha_id: {
      type: String,
      unique: true,
    },
    pengusaha_id: {
      type: String,
    },
    nama_usaha: {
      type: String,
    },
    deskripsi_usaha: {
      type: String,
    },
    jenis_usaha: {
      type: String,
    },
    alamat_usaha: {
      type: String,
    },
    foto_usaha: {
      type: [String],
    },
    fasilitas: {
      type: [String],
    },
    harga: {
      type: String,
    },
  },
  { timestamps: true, _id: true }
);

const usahaModel = mongoose.model("usaha", usahaSchema);

export default usahaModel;
