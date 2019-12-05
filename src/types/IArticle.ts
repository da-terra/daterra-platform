declare global {
  type IArticle = {
    slug: string;
    title: string;
    description: string;
    tags: number;
    image: {
      src: string;
      alt: string;
      fallbackColor: string;
    };
    author: {
      fullName: string;
      email: string;
    };
    blocks: string[];
    publishedDate: string;
    updatedDate: string;
    target: number;
    minScore: number;
    maxScore: number;
  };
}

export {};
