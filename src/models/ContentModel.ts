export interface IContentModel {
  mainTitle: string;
  description: string;
  tags: string[];
  subContent?: ISubContent[];
  lastUpdateDate: Date;
  pathName: string;
  featuredPost: boolean;
}

export interface ISubContent {
  title: string;
  description: string;
}

export interface IPostCardModel {
  lastUpdateDate: Date;
  title: string;
  tags: string[];
  pathName: string;
  featuredPost: boolean;
}
