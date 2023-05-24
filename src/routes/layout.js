import { useSelector } from "react-redux";
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = [{ title: "Productos", link: "products" }];

const Layout = () => {
  const state = useSelector((state) => state);
  const { isloggedIn, user } = state.userReducer;
  const { cart } = state.cartReducer;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!isloggedIn ||
              pages.map((page) => (
                <Button
                  key={page}
                  href={page.link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
          </Box>

          {!isloggedIn ? (
            <Button color="inherit" href={"login"}>
              Login
            </Button>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">{user.username}</Typography>
              <Button color="inherit" href={"cart"}>
                <Badge badgeContent={cart?.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Button>
              <Button color="inherit" href={"logout"}>
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};
export default Layout;
