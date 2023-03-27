export type Product = {
  id: number;
  image: string;
  name: string;
  producer: string;
  price: number;
  salePrice: number | null;
  isInStock: boolean;
};
