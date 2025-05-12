
import React from "react";
import { Button } from "../components/ui/button";



const Navbar = () => (
  <nav className="flex justify-between items-center p-4 border-b bg-background">
    <h1 className="text-xl font-bold">SoftSell</h1>
    <div>
      <Button variant="outline">Login</Button>
      <Button className="ml-2">Get Started</Button>
      
    </div>
  </nav>
);

export default Navbar;
