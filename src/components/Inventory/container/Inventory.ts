import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import { fetchProducts } from '../../../redux/inventorySlice';
import Inventory from '../presentational/Inventory';

const mapStateToProps = (state: RootState) => ({
  isAdmin: state.inventory.isAdmin,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadProducts: () => dispatch(fetchProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
