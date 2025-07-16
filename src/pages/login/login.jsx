import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/joy/Snackbar";
import { loginFuncttion } from "./features/api/loginApi";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("neutral");

  async function handlLoginFunction(e) {
    e.preventDefault();
    const userName = e.target.userName.value.trim();
    const password = e.target.password.value.trim();
    if (!userName || !password) {
      setSnackbarMessage("Заполните все поля!");
      setSnackbarColor("danger");
      setSnackbarOpen(true);
      return;
    }
    const user = {
      userName,
      password,
    };
    const resultAction = await dispatch(loginFuncttion(user));
    if (loginFuncttion.fulfilled.match(resultAction)) {
      setSnackbarMessage("Успешно!");
      setSnackbarColor("success");
      setSnackbarOpen(true);
      navigate("/");
    } else if (loginFuncttion.rejected.match(resultAction)) {
      const errorMessage = resultAction?.payload.message || "Ошибка при входе!";
      setSnackbarMessage(errorMessage);
      setSnackbarColor("danger");
      setSnackbarOpen(true);
    }
  }
  return (
    <div className="mb-4 ">
      <div className="grid grid-cols-2 ">
        <div
          className="flex flex-col space-y-0.5 bg-gradient-to-t from-slate-900 to-sky-950 w-[100%] h-screen p-1
justify-center         "
        >
          <h1 className="text-2xl ml-6 text-gray-50 font-medium">
            Welcome To Admin Panel
          </h1>
          <img src="/Group 1116606595 (1).png" alt="" className="w-62 ml-6" />
        </div>
        <div className="w-[100%] bg-gray-200 h-screen flex">
          <div className="w-[80%] m-auto ">
            <form
              onSubmit={handlLoginFunction}
              className="flex flex-col space-y-3"
            >
              <label htmlFor="" className="font-medium text-xl md:text-2xl ">
                Log in
              </label>
              <Input
                placeholder="Email"
                name="userName"
                autoComplete="username"
              />
              <Input
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="password"
              />
              <Button color="" className="text-blue-600 ">
                Forgot Password?
              </Button>
              <Button
                className="rounded-[12px]
              "
                type="submit"
              >
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={3000}
        color={snackbarColor}
        variant="solid"
      >
        {snackbarMessage}
      </Snackbar>
    </div>
  );
};

export default Login;
