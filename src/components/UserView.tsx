import React from 'react';
import { Container } from '@mui/material';
import TopWidgets from './TopWidgets';
import ProductTable from './ProductTable';

const UserView: React.FC = () => {
  return (
    <Container>
      <TopWidgets />
      <ProductTable
        isAdmin={false}
        onEdit={() => {}}
        onDelete={() => {}}
        onToggleDisable={() => {}}
      />
    </Container>
  );
};

export default UserView;
