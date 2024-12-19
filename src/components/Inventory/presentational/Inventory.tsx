import React, { useEffect } from "react";
import AdminView from "../../AdminView/container/AdminView";
import UserView from "../../UserView/UserView";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

interface InventoryProps {
  isAdmin: boolean;
  loadProducts: () => void;
}

const Inventory: React.FC<InventoryProps> = ({ isAdmin, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <Container maxWidth={false} sx={{ marginTop: 4, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Inventory Stats</Typography>
      <div>{isAdmin ? <AdminView /> : <UserView />}</div>
    </Container>
  );
};

export default Inventory;
