import { ProductCategory } from '../enums/product-category.enum';

export interface Category {
  categoryId: ProductCategory;
  name: string;
  count: number;
}
