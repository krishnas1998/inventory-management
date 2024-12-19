import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import { updateProduct, deleteProduct, toggleProductDisable } from '../../../redux/inventorySlice';
import AdminViewPresentation from '../presentational/AdminView';
import { Product } from '../../../types/Product';

const mapStateToProps = (state: RootState) => ({
  products: state.inventory.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateProduct: (product: Product, index: number) => {
    dispatch(updateProduct({ product, index }));
  },
  deleteProduct: (index: number) => {
    dispatch(deleteProduct(index));
  },
  toggleProductDisable: (index: number) => {
    dispatch(toggleProductDisable(index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminViewPresentation);
