import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { Product } from '../types/Product';

interface EditProductModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ open, product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (editedProduct) {
      onSave(editedProduct);
    }
    onClose();
  };

  if (!editedProduct) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          fullWidth
          value={editedProduct.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="category"
          label="Category"
          fullWidth
          value={editedProduct.category}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={editedProduct.price}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="quantity"
          label="Quantity"
          type="number"
          fullWidth
          value={editedProduct.quantity}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductModal;
