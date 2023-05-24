import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProductFromCart } from "../redux/actions";

const ProductCardOnCart = ({ product }) => {
  const { title, image, category, price } = product;
  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(deleteProductFromCart(product));
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
        <Button size="small" onClick={deleteFromCart}>
          Remove from cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCardOnCart;
