import React, { useState } from 'react';
import { Container } from '@mui/material';
import TopWidgets from '../../TopWidgets/container/TopWidgets';
import ProductTable from '../../ProductTable/container/ProductTable';
import EditProductModal from '../../EditProductModal/EditProductModal';
import { Product } from '../../../types/Product';

interface AdminViewProps {
  products: Product[];
  updateProduct: (product: Product, index: number) => void;
  deleteProduct: (index: number) => void;
  toggleProductDisable: (index: number) => void;
}

const AdminViewPresentation: React.FC<AdminViewProps> = ({
  updateProduct,
  deleteProduct,
  toggleProductDisable,
}) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingProductIndex, setEditingProductIndex] = useState<number>(0);

  const handleEdit = (product: Product, index: number) => {
    setEditingProduct(product);
    setEditingProductIndex(index);
  };

  const handleSave = (updatedProduct: Product) => {
    updatedProduct.price = `$${updatedProduct.price.replace('$', '')}`;
    updatedProduct.value = `$${updatedProduct.value.replace('$', '')}`;
    updateProduct(updatedProduct, editingProductIndex);
    setEditingProduct(null);
    setEditingProductIndex(0);
  };

  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <TopWidgets />
      <ProductTable
        isAdmin={true}
        onEdit={handleEdit}
        onDelete={deleteProduct}
        onToggleDisable={toggleProductDisable}
      />
      <EditProductModal
        open={!!editingProduct}
        product={editingProduct}
        onClose={() => setEditingProduct(null)}
        onSave={handleSave}
      />
    </Container>
  );
};

export default AdminViewPresentation;
