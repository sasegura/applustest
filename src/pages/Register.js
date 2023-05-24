import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import IsLoadding from "../components/isLoadding";

const defaultValues = {
  username: "",
  password: "",
  repeatedPassword: "",
  email: "",
};

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logedin = useSelector((state) => state.userReducer.isloggedIn);
  const loginError = useSelector((state) => state.userReducer.loginError);
  const isloginUser = useSelector((state) => state.userReducer.isloginUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (logedin) navigate("/products");
  }, [logedin, navigate]);

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
            {errors.username && <span>Campo requerido</span>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              inputProps={{ ...register("email", { required: true }) }}
            />
            {errors.username && <span>{errors.username.message}</span>}
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
            {errors.password && <span>Campo requerido</span>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeatedPassword"
              label="Repeat Password"
              type="password"
              id="repeatedPassword"
              autoComplete="current-password"
              inputProps={{
                ...register("repeatedPassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Las contraseñas no coinciden";
                    }
                  },
                }),
              }}
            />
            {errors.repeatedPassword && (
              <span>{errors.repeatedPassword.message}</span>
            )}
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
            {/* <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
          </form>
        </IsLoadding>
      </Box>
    </Container>
  );
}

export default Register;
