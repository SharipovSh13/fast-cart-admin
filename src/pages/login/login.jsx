import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

const Login = () => {
  return (
    <div className="mb-4 ">
      <div className="flex gap-0.5 items-center">
        <div
          className="flex flex-col space-y-0.5 bg-gradient-to-t from-slate-900 to-sky-950 w-[50%] h-screen p-1
justify-center         "
        >
          <h1 className="text-2xl ml-6 text-gray-50 font-medium">
            Welcome To Admin Panel
          </h1>
          <img src="/Group 1116606595 (1).png" alt="" className="w-62 ml-6" />
        </div>
        <div className="w-[50%] bg-gray-200 h-screen">
          <div>
            <label htmlFor="" className="font-medium text-xl md:text-2xl ">
              Log in
            </label>
            <FormControl className="flex flex-col space-y-3">
              <FormLabel></FormLabel>
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
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
