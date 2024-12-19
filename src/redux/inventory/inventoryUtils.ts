import { Product } from '../../types/Product';

export const inventoryUtils = {
  /**
   * Updates a product in the products array at the specified index
   * @param products Current products array
   * @param product Updated product
   * @param index Index of the product to update
   * @returns New products array with the updated product
   */
  updateProductInList: (products: Product[], product: Product, index: number): Product[] => {
    if (index < 0 || index >= products.length) {
      return products;
    }
    return [
      ...products.slice(0, index),
      product,
      ...products.slice(index + 1)
    ];
  },

  /**
   * Toggles the disabled state of a product at the specified index
   * @param products Current products array
   * @param index Index of the product to toggle
   * @returns New products array with the toggled product
   */
  toggleProductDisableState: (products: Product[], index: number): Product[] => {
    if (index < 0 || index >= products.length) {
      return products;
    }
    return products.map((product, i) => 
      i === index 
        ? { ...product, disabled: !product.disabled }
        : product
    );
  },

  /**
   * Removes a product from the array at the specified index
   * @param products Current products array
   * @param index Index of the product to remove
   * @returns New products array without the removed product
   */
  removeProduct: (products: Product[], index: number): Product[] => {
    if (index < 0 || index >= products.length) {
      return products;
    }
    return products.filter((_, i) => i !== index);
  }
};