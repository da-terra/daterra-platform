import getMatchingBitmasks from "../util/getMatchingBitmasks";

export const Tags = {
  Announcement: 1 << 0,
  CaseStudy: 1 << 1
};

export const TagNames = {
  [Tags.Announcement]: "Aankondiging",
  [Tags.CaseStudy]: "Case Study"
};

export const getTagNames = (tagBit: number): string[] =>
  getMatchingBitmasks(tagBit, Tags).map(bit => TagNames[bit]);
