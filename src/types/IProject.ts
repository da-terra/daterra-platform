import IUser from "./IUser";
import ICompany from "./ICompany";

type IProject = {
  uuid: string;

  company: ICompany;
  owner: IUser;
  team: IUser[];

  title: string;
  tags: string[];

  duration?: {
    startDate: string;
    endDate: string;
  };

  publishedDate: string | undefined;
  finishedDate: string | undefined;

  createdDate: string;
  updatedDate: string;
};

export default IProject;
