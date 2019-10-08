import ICaseStudy from "../type/ICaseStudy";

const caseStudy: ICaseStudy = {
  uuid: "f7aa558a-6bb5-447e-91c5-cfd0429b05d8",
  title: "The Method of Full Featured Innovation",
  publishedDate: "2012-04-15T18:43:26.007Z",
  author: {
    image: {
      url: "https://source.unsplash.com/100x100/?avatar",
      alt: "Image of Peter Parker"
    },
    link: {
      url: "https://google.com/",
      target: "_blank"
    },
    fullName: "Peter Parker",
    company: "Advanced Investements",
    location: "San Fransisco"
  },
  collaborators: [
    {
      fullName: "Matthias Verweij",
      image: {
        url: "https://source.unsplash.com/100x100/?avatar",
        alt: "Image of Matthias Verweij"
      },
      tags: ["Student", "Data Analyst"]
    }
  ]
};

export default ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(key => {
  return { ...caseStudy, uuid: key };
});
