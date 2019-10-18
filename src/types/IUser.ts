import IImage from "./IImage";

type IUser = {
  image?: IImage;
  fullName: string;
  email: string;
  phone?: string;
  tags?: string[];
};

export default IUser;
