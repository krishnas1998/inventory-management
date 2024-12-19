import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import ProductTable from '../presentational/ProductTable';

const mapStateToProps = (state: RootState) => ({
  products: state.inventory.products,
});

export default connect(
  mapStateToProps
)(ProductTable);
