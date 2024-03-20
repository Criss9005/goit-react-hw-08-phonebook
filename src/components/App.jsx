import { Routes, Route  } from "react-router-dom";
import { Suspense } from "react";
import Register from "pages/Register/Register";
import Home from "pages/Home/Home";
import Contacts from "pages/Contacts/Contacts"
import Navigation from "./Navigation/Navigation";

const App = () => {
 
  return (
   
    <Suspense fallback={ <div>Loading...</div>}>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        
      </Routes>
    </Suspense>
  
     
  );
};

export default App