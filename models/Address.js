import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    userId: { type: String, required: true , ref: 'user' }, 
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    postalCode: { type: String, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
});

const Address = mongoose.models.Address || mongoose.model('Address', addressSchema);

export default Address;