import { ProductCategory } from '../enums/product-category.enum';

export interface Category {
  id: ProductCategory;
  name: string;
  count: number;
}
