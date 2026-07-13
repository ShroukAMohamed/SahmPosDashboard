export enum ProductCategory {
  COMBO = 1,
  BURGER = 2,
  SIDE = 3,
  BEVERAGE = 4,
  DESSERT = 5
}

export const ProductCategoryLabels: Record<ProductCategory, string> = {
  [ProductCategory.COMBO]: 'Combos',
  [ProductCategory.BURGER]: 'Burgers',
  [ProductCategory.SIDE]: 'Sides',
  [ProductCategory.BEVERAGE]: 'Beverages',
  [ProductCategory.DESSERT]: 'Desserts'
};
