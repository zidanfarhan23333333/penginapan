import mongoose from 'mongoose';

const PesananSchema = new mongoose.Schema({
  usaha_id: {type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Pesanan = mongoose.model('Pesanan', PesananSchema);

export default Pesanan;