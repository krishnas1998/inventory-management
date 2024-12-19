import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { Product } from '../../../types/Product';
import { styled } from '@mui/material/styles';

interface ProductTableProps {
  products: Product[];
  isAdmin: boolean;
  onEdit: (product: Product, index: number) => void;
  onDelete: (index: number) => void;
  onToggleDisable: (index: number) => void;
}

const HeaderCell = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: 'black',
  padding: '4px 8px',
  borderRadius: '8px',
  display: 'inline-block'
}));

const ProductTable: React.FC<ProductTableProps> = ({ products, isAdmin, onEdit, onDelete, onToggleDisable }) => {
  const handleEdit = (product: Product, index: number) => () => onEdit(product, index);
  const handleDelete = (index: number) => () => onDelete(index);
  const handleToggleDisable = (index: number) => () => onToggleDisable(index);

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
          {products.map((product, index) => (
            <TableRow key={index} sx={{ opacity: product.disabled ? 0.5 : 1 }}>
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
                <IconButton color="primary" onClick={handleEdit(product, index)} disabled={product.disabled || !isAdmin}>
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={handleToggleDisable(index)} disabled={!isAdmin}>
                  <Visibility />
                </IconButton>
                <IconButton color="error" onClick={handleDelete(index)} disabled={!isAdmin}>
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
