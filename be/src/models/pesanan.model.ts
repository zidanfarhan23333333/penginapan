import mongoose from 'mongoose';

const PesananSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  namaUsaha: { type: String, required: true },
  deskripsiUsaha: { type: String, required: true },
  jenisUsaha: { type: String, required: true },
  alamatUsaha: { type: String, required: true },
  fasilitas: { type: String, required: true },
  harga: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Pesanan = mongoose.model('Pesanan', PesananSchema);

export default Pesanan;