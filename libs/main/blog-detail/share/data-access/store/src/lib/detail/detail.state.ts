export interface IBlogDetail {
  id: string;
  title: string;
  content: string;
  image?: {
    url: string;
  };
  createdAt: Date | string;
  updatedAt: Date | string;
}
