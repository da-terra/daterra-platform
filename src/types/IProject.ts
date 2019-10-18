import IUser from "./IUser";
import IOwner from "./IOwner";

type IProject = {
  uuid: string;

  owner: IOwner;
  team?: IUser[];

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
