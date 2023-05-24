import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProductsList, getProducts } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import { Box, Grid } from "@mui/material";
import IsLoadding from "../components/isLoadding";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const loadingProducts = useSelector(
    (state) => state.productsReducer.loadingProducts
  );

  useEffect(() => {
    if (!products) dispatch(getProducts());
    return () => clearProductsList();
  }, []);

  return (
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
            <Grid item xs={12} key={product.id} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </IsLoadding>
    </Box>
  );
};

export default Products;
