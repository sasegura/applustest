import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserLogout } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserLogout());
    navigate("/login");
  }, [navigate, dispatch]);

  return <></>;
}

export default Logout;
