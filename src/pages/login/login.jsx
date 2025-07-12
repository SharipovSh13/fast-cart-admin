import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

const Login = () => {
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
          <div className="w-[80%] m-auto flex flex-col space-y-3">
            <label htmlFor="" className="font-medium text-xl md:text-2xl ">
              Log in
            </label>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button color="" className="text-blue-600 ">
              Forgot Password?
            </Button>
            <Button
              className="rounded-[12px]
              "
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
