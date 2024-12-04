/* eslint-disable no-unused-vars */

// 4XO0uRWy9EndPs1b
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      isLoading: registerLoading,
      error: registerError,
      data: registerData,
      isSuccess: registerSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      isLoading: loginLoading,
      error: loginError,
      data: loginData,
      isSuccess: loginSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegister = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };
  useEffect(() => {
    if (registerSuccess && registerData) {
      toast.success(registerData.message || "Signup successful!");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Signup failed!");
    }
    if (loginSuccess && loginData) {
      toast.success(loginData.message || "Login successful!");
    }
    if (loginError) {
      toast.error(loginError.data.message || "Login failed!");
    }
  }, [
    registerSuccess,
    loginSuccess,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);
  return (
    <div className="flex items-center justify-center w-full mt-20">
      <Tabs defaultValue="Signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="SignUp" className="uppercase">
            Signup
          </TabsTrigger>
          <TabsTrigger value="login" className="uppercase">
            Login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="SignUp">
          <Card>
            <CardHeader>
              <CardTitle>SIGNUP</CardTitle>
              <CardDescription>
                Create your account and join us in seconds!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  id="name"
                  placeholder="Ex: John Doe"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  type="email"
                  placeholder="Ex: oK9T2@example.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  type="password"
                  placeholder="Ex: abc123"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerLoading}
                className="uppercase"
                onClick={() => handleRegister("signup")}
              >
                {registerLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4animate-spin" /> Please wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="uppercase">Login</CardTitle>
              <CardDescription>
                Access your account effortlessly!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                  type="email"
                  placeholder="Ex: oK9T2@example.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  type="password"
                  placeholder="Ex: abc123"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginLoading}
                className="uppercase"
                onClick={() => handleRegister("login")}
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  "Login"
                )}
                
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
