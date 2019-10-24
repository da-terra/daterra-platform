import IUser from "./IUser";

type ICaseStudy = {
  uuid: string;
  title: string;
  summary: string;
  owner: IUser;
  team: IUser[];
  createdDate: string;
  publishedDate: string;
  updatedDate: string;
};

export default ICaseStudy;
