import React, { useState } from 'react';
import { Container } from '@mui/material';
import TopWidgets from '../../TopWidgets';
import ProductTable from '../../ProductTable';
import EditProductModal from '../../EditProductModal';
import { Product } from '../../../types/Product';

interface AdminViewProps {
  products: Product[];
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  toggleProductDisable: (id: number) => void;
}

const AdminViewPresentation: React.FC<AdminViewProps> = ({
  updateProduct,
  deleteProduct,
  toggleProductDisable,
}) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: Product) => {
    updateProduct(updatedProduct);
    setEditingProduct(null);
  };

  return (
    <Container>
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
