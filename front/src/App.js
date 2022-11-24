import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewContent from "./pages/NewContent";
import EditContent from "./pages/EditContent";
import MyDiaryList from "./pages/MyDiaryList";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="new" element={<NewContent />} />
            <Route path="edit" element={<EditContent />} />
            <Route path="mydiary" element={<MyDiaryList />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
