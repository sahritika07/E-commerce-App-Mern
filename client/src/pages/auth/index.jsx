import { Tabs } from "@radix-ui/react-tabs"
import Background from "../../assets/login2.png"
import Victory from "../../assets/victory.svg"
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleLogin = async () =>{

  }

  const handleSignUp = async () =>{
    
  }

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
  <div className="h-[85vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 overflow-hidden">
    <div className="flex flex-col gap-10 items-center justify-center px-6 py-10">
      <div className="flex items-center justify-center flex-col text-center gap-2">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
          <img src={Victory} alt="Victory Emoji" className="h-20 md:h-24" />
        </div>
        <p className="font-medium">Fill in the details to get started with the best chat app!</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Tabs className="w-full px-4 md:px-8">
          <TabsList className="bg-transparent rounded-none w-full">
            <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">SignUp</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="flex flex-col gap-5 mt-10">
            <Input
              placeholder="Email"
              type="email"
              className="rounded-full p-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              className="rounded-full p-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
          </TabsContent>
          <TabsContent value="signup" className="flex flex-col gap-5 mt-10">
            <Input
              placeholder="Email"
              type="email"
              className="rounded-full p-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              className="rounded-full p-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              className="rounded-full p-6"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button className="rounded-full p-6" onClick={handleSignUp}>Sign Up</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    <div className="hidden xl:flex justify-center items-center overflow-hidden">
      <img src={Background} alt="Auth Illustration" className="max-h-full w-auto object-contain" />
    </div>
  </div>
</div>

  )
}

export default Auth
