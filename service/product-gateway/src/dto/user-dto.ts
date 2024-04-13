export interface UserDto {
  name: string;
  dob: number;
  address: Address;
  city: string;
  email: string;
  contact: number;
  password: string;
  cart: [];
}

interface Address {
  address1: string;
  address2: string;
  pincode: number;
}
