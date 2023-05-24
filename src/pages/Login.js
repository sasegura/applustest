import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import IsLoadding from "../components/isLoadding";
import { Grid } from "@mui/material";

const defaultValues = {
  username: "mor_2314",
  password: "83r5^_",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logedin = useSelector((state) => state.isloggedIn);
  const loginError = useSelector((state) => state.loginError);
  const isloginUser = useSelector((state) => state.isloginUser);

  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (logedin) navigate("/products");
  }, [logedin, navigate]);

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <IsLoadding loadding={isloginUser}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              inputProps={{ ...register("username", { required: true }) }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{ ...register("password", { required: true }) }}
            />
            {loginError?.message ? (
              <Box>
                <Box>{loginError?.message}</Box>
                <Box>username: mor_2314</Box>
                <Box>password: 83r5^_</Box>
              </Box>
            ) : (
              ""
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Button onClick={goToRegister} variant="text">
                  {"Registro"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </IsLoadding>
      </Box>
    </Container>
  );
}

export default Login;
