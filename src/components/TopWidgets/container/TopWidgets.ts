import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import TopWidgetsPresentation from '../presentational/TopWidgets';

const mapStateToProps = (state: RootState) => {
  const products = state.inventory.products;
  
  const totalProducts = products.length;
  const getProductValue = (value: string) => {
    const valueNumber = parseFloat(value.replace('$', ''));
    return isNaN(valueNumber) ? 0 : valueNumber;
  };
  const totalStoreValue = products.reduce((sum, product) => sum + getProductValue(product.value), 0);
  const outOfStock = products.filter(product => product.quantity == 0).length;
  const categories = new Set(products.map(product => product.category)).size;

  return {
    totalProducts,
    totalStoreValue,
    outOfStock,
    categories,
  };
};

export default connect(mapStateToProps)(TopWidgetsPresentation);
