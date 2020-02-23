import { getFlaggedBits } from "@data-science-platform/shared";

export const Tags = {
  Announcement: 1 << 0,
  CaseStudy: 1 << 1
};

export const TagNames = {
  [Tags.Announcement]: "Aankondiging",
  [Tags.CaseStudy]: "Case Study"
};

export const getTagNames = (tagBit: number): string[] =>
  getFlaggedBits(Tags, tagBit).map(bit => TagNames[bit]);
