import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Index";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
