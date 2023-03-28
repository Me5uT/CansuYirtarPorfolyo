export interface IContentModel {
  mainTitle: string;
  description: string;
  tags: string[];
  lastUpdateDate: Date;
  pathName: string;
  featuredPost: boolean;
}

export interface IPostCardModel {
  lastUpdateDate: Date;
  title: string;
  tags: string[];
  pathName: string;
  featuredPost: boolean;
}
