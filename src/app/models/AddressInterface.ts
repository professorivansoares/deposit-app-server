interface AddressInterface {
  city: string;
  country: string;
  lat?: number;
  lon?: number;
  line1: string;
  line2?: string;
  state: string;
  zipcode: string;
}

export default AddressInterface;