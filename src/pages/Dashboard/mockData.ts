import IProject from "../../types/IProject";

export const finishedProject: IProject = {
  uuid: "e5072e42-dd55-475a-b1b5-b0908b290db5",
  owner: {
    image: {
      src: "https://source.unsplash.com/100x100/?avatar",
      alt: "Foto van Ijsselvliet",
      fallbackColor: "#eee"
    },
    link: {
      href: "https://google.com/",
      target: "_blank"
    },
    title: "Hogeschool Windesheim",
    location: "Zwolle"
  },

  team: [
    {
      image: {
        src: "https://source.unsplash.com/100x100/?avatar",
        alt: "Profiel foto van Matthias Verweij",
        fallbackColor: "#eee"
      },
      fullName: "Matthias Verweij",
      email: "matthias.verweij@studata.nl",
      phone: "+31 06 12 34 56 78"
    }
  ],

  title: "The Survey of Accessible Enhancement",
  tags: ["Good start", "Experiment"],

  duration: {
    startDate: "2019-10-08T14:52:23.474Z",
    endDate: "2019-10-08T14:52:23.474Z"
  },
  publishedDate: "2019-10-08T14:52:23.474Z",
  finishedDate: "2019-10-08T14:52:23.474Z",

  createdDate: "2019-10-08T14:52:23.474Z",
  updatedDate: "2019-10-08T14:52:23.474Z"
};

export const activeProject: IProject = {
  ...finishedProject,
  finishedDate: undefined
};

export const newProject: IProject = {
  ...finishedProject,
  finishedDate: undefined,
  publishedDate: undefined
};

type PersonalStatistics = {
  finishedProjects: IProject[];
};

export const personalStatistics: PersonalStatistics = {
  finishedProjects: [
    { ...finishedProject, uuid: "1" },
    { ...finishedProject, uuid: "2" },
    { ...finishedProject, uuid: "3" }
  ]
};
