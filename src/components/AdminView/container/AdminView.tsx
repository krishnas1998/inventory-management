import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import { updateProduct, deleteProduct, toggleProductDisable } from '../../../redux/inventorySlice';
import AdminViewPresentation from '../presentational/AdminView';
import { Product } from '../../../types/Product';

const mapStateToProps = (state: RootState) => ({
  products: state.inventory.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateProduct: (product: Product) => {
    dispatch(updateProduct(product));
  },
  deleteProduct: (id: number) => {
    dispatch(deleteProduct(id));
  },
  toggleProductDisable: (id: number) => {
    dispatch(toggleProductDisable(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminViewPresentation);
