import IOwner from "./IOwner";
import IUser from "./IUser";

type ICaseStudy = {
  uuid: string;
  title: string;
  owner: IOwner;
  team: IUser[];
  createdDate: string;
  publishedDate: string;
  updatedDate: string;
};

export default ICaseStudy;
