import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Master} from "./pages/Master/Master";
import {ComfortDay} from "./pages/Date/Date";
import {Service} from "./pages/Service/Service";
import {Address} from "./pages/Address/Address";
import {Layout} from "./pages/Layout";
import {BookService} from "./pages/BookSevice/BookService";
import {Success} from "./pages/Success/Success";

export function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="master" element={<Master/>} />
              <Route path="date" element={<ComfortDay/>} />
              <Route path="service" element={<Service/>} />
              <Route path="address" element={<Address/>} />
              <Route path="book-service" element={<BookService/>}/>
              <Route path="success" element={<Success/>} />
          </Route>
      </Routes>
    </div>
  );
}
