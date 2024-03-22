import { Routes, Route  } from "react-router-dom";
import { Suspense } from "react";
import Register from "pages/Register/Register";
import Home from "pages/Home/Home";
import Contacts from "pages/Contacts/Contacts"
import Navigation from "./Navigation/Navigation";
import { RestrictedRoute } from "./RestrictedRoute";
import Login from '../pages/Login/Login'
import { PrivateRoute } from "./PrivateRoute";

const App = () => {
 
  return (
   
    <Suspense fallback={ <div>Loading...</div>}>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <RestrictedRoute redirectTo="/contacts" component={<Login/>} />  } />
        <Route path="/register" element={ <RestrictedRoute redirectTo="/contacts" component={<Register/>} />  } />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </Suspense>
  
     
  );
};

export default App