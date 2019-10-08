export type ICollaborator = {
  fullName: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
};

type ICaseStudy = {
  uuid: string;
  title: string;
  publishedDate: string;
  author: {
    image: {
      url: string;
      alt: string;
    };
    link: {
      url: string;
      target: string;
    };
    fullName: string;
    company: string;
    location: string;
  };
  collaborators: ICollaborator[];
};

export default ICaseStudy;
