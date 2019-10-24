import IUser from "./IUser";

type IProject = {
  uuid: string;

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
