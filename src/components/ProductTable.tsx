import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { RootState } from '../redux/store';
import { Product } from '../types/Product';
import { styled } from '@mui/material/styles';

interface ProductTableProps {
  isAdmin: boolean;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  onToggleDisable: (id: number) => void;
}

const HeaderCell = styled('span')({
  color: '#cadf66',
  backgroundColor: 'black',
  padding: '4px 8px',
  borderRadius: '8px',
  display: 'inline-block'
});

const ProductTable: React.FC<ProductTableProps> = ({ isAdmin, onEdit, onDelete, onToggleDisable }) => {
  const products = useSelector((state: RootState) => state.inventory.products);

  const handleEdit = (product: Product) => () => onEdit(product);
  const handleDelete = (id: number) => () => onDelete(id);
  const handleToggleDisable = (id: number) => () => onToggleDisable(id);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><HeaderCell>Name</HeaderCell></TableCell>
            <TableCell><HeaderCell>Category</HeaderCell></TableCell>
            <TableCell><HeaderCell>Price</HeaderCell></TableCell>
            <TableCell><HeaderCell>Quantity</HeaderCell></TableCell>
            <TableCell><HeaderCell>Value</HeaderCell></TableCell>
            <TableCell><HeaderCell>Actions</HeaderCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} sx={{ opacity: product.disabled ? 0.5 : 1 }}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                {product.price}
              </TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                {product.value}
              </TableCell>
              <TableCell>
                <IconButton color="primary" onClick={handleEdit(product)} disabled={product.disabled || !isAdmin}>
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={handleToggleDisable(product.id)} disabled={!isAdmin}>
                  <Visibility />
                </IconButton>
                <IconButton color="error" onClick={handleDelete(product.id)} disabled={!isAdmin}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
