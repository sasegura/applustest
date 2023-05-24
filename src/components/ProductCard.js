import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/actions";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { title, image, category, price } = product;
  const dispatch = useDispatch();
  const productsOnCart = useSelector((state) => state.cart);

  const addToCar = () => {
    if (productsOnCart.length === 0) {
      dispatch(addProductToCart([product]));
    } else {
      if (!productsOnCart.find((prod) => prod.id === product.id))
        dispatch(addProductToCart([...productsOnCart, product]));
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
        sx={{ margin: "16px auto", width: "auto" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 35, overflow: "hidden" }}
        >
          Título: {title}
        </Typography>
        <Typography variant="h6">Categoría: {category}</Typography>
        <Typography variant="h6">Precio: {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCar}>
          Agregar a la cesta
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
