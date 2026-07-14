import { ProductCategory } from '../enums/product-category.enum';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: ProductCategory;
  available: boolean;
  isSpicy?: boolean;
}
