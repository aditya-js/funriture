import mongoose from '../index';

const { Schema, model } = mongoose;

export const User = new Schema({
  name: String,
  dob: Number,
  address: {
    address1: String,
    address2: String,
    pincode: Number,
  },
  city: String,
  email: String,
  contact: Number,
  cart: [{ productUuid: String, variant: String, quantity: Number }],
  password: { type: String, select: false },
});

export const UserSchema = model('users', User);
