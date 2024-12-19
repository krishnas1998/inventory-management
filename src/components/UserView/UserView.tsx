import React from 'react';
import { Container } from '@mui/material';
import TopWidgets from '../TopWidgets/container/TopWidgets';
import ProductTable from '../ProductTable/container/ProductTable';

const UserView: React.FC = () => {
  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
