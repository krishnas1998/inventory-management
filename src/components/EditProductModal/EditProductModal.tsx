import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../../types/Product';

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
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Edit Product
        {editedProduct.name && (
          <div>
            <Typography variant="subtitle2">
              {editedProduct.name}
            </Typography>
          </div>
        )}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon color="primary" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              margin="dense"
              name="category"
              label="Category"
              fullWidth
              value={editedProduct.category}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              margin="dense"
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={editedProduct.price.replace('$', '')}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              margin="dense"
              name="quantity"
              label="Quantity"
              type="number"
              fullWidth
              value={editedProduct.quantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              margin="dense"
              name="value"
              label="Value"
              fullWidth
              type="number"
              value={editedProduct.value.replace('$', '')}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductModal;
