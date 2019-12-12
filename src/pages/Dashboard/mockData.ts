import Roles from "../../data/Role";

export const finishedProject: IProject = {
  uuid: "e5072e42-dd55-475a-b1b5-b0908b290db5",

  company: {
    image: {
      src: "https://source.unsplash.com/100x100/?logo",
      alt: "Foto van Lennard Koning",
      fallbackColor: "#eee"
    },
    title: "Hogeschool Windesheim"
  },

  owner: {
    image: {
      src: "https://source.unsplash.com/100x100/?avatar",
      alt: "Foto van Lennard Koning",
      fallbackColor: "#eee"
    },
    email: "lennard.koning@data-science-platform.nl",
    fullName: "Lennard Koning",
    role: Roles.Lead
  },

  team: [
    {
      image: {
        src: "https://source.unsplash.com/100x100/?avatar",
        alt: "Profiel foto van Matthias Verweij",
        fallbackColor: "#eee"
      },
      fullName: "Matthias Verweij",
      email: "matthias.verweij@data-science-platform.nl",
      phone: "+31 06 12 34 56 78",
      role: Roles.Developer
    },

    {
      image: {
        src: "https://source.unsplash.com/100x100/?person",
        alt: "Profiel foto van Alex Damman",
        fallbackColor: "#eee"
      },
      fullName: "Alex Damman",
      email: "alex.damman@data-science-platform.nl",
      phone: "+31 06 12 34 56 78",
      role: Roles.Developer
    },

    {
      image: {
        src: "https://source.unsplash.com/100x100/?avatar",
        alt: "Profiel foto van Marien Zwarts",
        fallbackColor: "#eee"
      },
      fullName: "Marien Zwarts",
      email: "marien.zwarts@data-science-platform.nl",
      phone: "+31 06 12 34 56 78",
      role: Roles.Lead
    }
  ],

  title: "The Survey of Accessible Enhancement",
  tags: ["Good start", "Experiment"],

  duration: {
    startDate: "2019-10-08T14:52:23.474Z",
    endDate: "2019-10-31T14:52:23.474Z"
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
