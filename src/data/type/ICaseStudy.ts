export type IImage = {
  url: string;
  alt: string;
  fallbackColor: string;
};

export type ICollaborator = {
  fullName: string;
  image: IImage;
  tags: string[];
};

export type IPartner = {
  image: IImage;
  link: {
    href: string;
    target: "_blank" | "_self";
  };
  title: string;
  location: string;
};

type ICaseStudy = {
  uuid: string;
  title: string;
  publishedDate: string;
  partner: IPartner;
  collaborators: ICollaborator[];
};

export default ICaseStudy;
