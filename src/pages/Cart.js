import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/actions";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
} from "@mui/material";
import IsLoadding from "../components/isLoadding";
import ProductCardOnCart from "../components/ProductCardOnCart";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const loadingProducts = useSelector((state) => state.loadingProducts);

  const handlePay = () => {
    dispatch(clearCart());
    setOpen(false);
    setOpenSnackBar(true);
  };

  useEffect(() => {
    let suma = 0;
    products.forEach(function (a) {
      suma += a.price;
    });
    setTotalPrice(suma);
  }, [products]);

  return (
    <Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {products.length > 0 ? (
          <Box>
            <Button onClick={() => dispatch(clearCart())}>
              Limpiar carrito
            </Button>
            <Button onClick={() => setOpen(true)}>Comprar</Button>
          </Box>
        ) : (
          "Añade  productos al carrito"
        )}
      </Box>

      <Box
        sx={{
          margin: 2,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IsLoadding loadding={loadingProducts}>
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: 1 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {products?.map((product) => (
              <Grid item xs={12} key={product?.id} sm={6} md={3}>
                <ProductCardOnCart product={product} />
              </Grid>
            ))}
          </Grid>
        </IsLoadding>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Pago de productos"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Quieres proceder al pago de {totalPrice}€ por los productos del
            carrito?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handlePay} autoFocus>
            Acceptar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          ¡Compra realizada satisfactoriamente!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart;
