import {
    Card,
    CardBody,
    CardFooter,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { FaEyeSlash, FaEye } from "react-icons/fa";
  
  export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ email: false, password: false });
    const [success, setSuccess] = useState(false);
    const [changeEye, setChangeEye] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
  
      if (!email) {
        setError((prevError) => ({ ...prevError, email: true }));
        valid = false;
      } else {
        setError((prevError) => ({ ...prevError, email: false }));
      }
  
      if (!password) {
        setError((prevError) => ({ ...prevError, password: true }));
        valid = false;
      } else {
        setError((prevError) => ({ ...prevError, password: false }));
      }
  
      if (valid) {
        setSuccess(true);
        navigate("/main");
      } else {
        setSuccess(false);
      }
    };
  
    return (
      <div className="max-w-screen h-screen bg-plum flex flex-col gap-6 justify-center items-center">
        <div className="relative -top-16">
          <img src="/movie.png" alt="" />
        </div>
        <Card className="w-[400px] bg-primary shadow-md">
          <CardBody className="flex flex-col gap-4">
            <h1 className="text-3xl my-3 !text-white">Sign</h1>
            <Input
              color="white"
              variant="static"
              placeholder="Email"
              size="lg"
              className="!text-white decoration-white"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              success={success}
              error={error.email}
            />
            <Input
              color="white"
              type={changeEye ? "text" : "password"}
              variant="static"
              placeholder="Password"
              className="!text-white decoration-white"
              onChange={({ target }) => setPassword(target.value)}
              size="lg"
              success={success}
              error={error.password}
              icon={
                changeEye ? (
                  <FaEye onClick={() => setChangeEye((prev) => !prev)} className="text-white hover:text-cherry2 hover:cursor-pointer" />
                ) : (
                  <FaEyeSlash onClick={() => setChangeEye((prev) => !prev)} className="text-white hover:text-cherry2 hover:cursor-pointer" />
                )
              }
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              size="lg"
              type="submit"
              onClick={handleSubmit}
              className="bg-cherry2 normal-case text-[16px] hover:bg-white hover:text-black"
              fullWidth
            >
              Create an account
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center text-white">
              Have an account?
              <Link to='/'> 
                <Typography
                  as="a"
                  href="#login"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold text-cherry2"
                >
                  Login
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    );
  }