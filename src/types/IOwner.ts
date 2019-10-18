import IImage from "./IImage";

type IOwner = {
  image: IImage;
  link: {
    href: string;
    target: "_blank" | "_self";
  };
  title: string;
  location: string;
};

export default IOwner;
