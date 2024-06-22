import mongoose from "mongoose";

const pesananSchema = new mongoose.Schema(
  {
    pesanan_id: {
      type: String,
      unique: true,
    },
    usaha_id: {
      type: String,
    },
    user_id: {
      type: String,
    },
    no_telp: {
      type: String,
    },
    nama_usaha: {
      type: String,
    },
    foto_usaha: {
      type: [String],
    },
    alamat_usaha: {
      type: String,
    },
    jenis_usaha: {
      type: String,
    },
  },
  { timestamps: true, _id: true }
);

const pesananModel = mongoose.model("pesanan", pesananSchema);

export default pesananModel;
