// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Counter from "./Counter";
// import Hello from "./Hello";
// import User from "./User";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/counter">Counter</Link> |{" "}
//         <Link to="/hello">Hello</Link> |{" "}
//         <Link to="/user/1">User 1</Link> |{" "}
//         <Link to="/user/2">User 2</Link>
//       </nav>

//       <Routes>
//         {/* Home */}
//         <Route
//           path="/"
//           element={
//             <>
//               <h1>App Component</h1>
//               <Hello />
//               <Hello name="yahubaba" />
//               <Counter />
//             </>
//           }
//         />

//         {/* Counter */}
//         <Route path="/counter" element={<Counter />} />

//         {/* Hello */}
//         <Route path="/hello" element={<Hello name="yahubaba" />} />

//         {/* User Dynamic Route */}
//         <Route path="/user/:id" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// 
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Counter from "./Counter";
import Hello from "./Hello";
import Product from "./Product";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>App Component (Home)</h1>

      <Hello />
      <Hello name="yahubaba" />

      <button onClick={() => navigate("/counter")}>
        Go to Counter
      </button>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/hello">Hello</Link> |{" "}
        <Link to="/product/1">Product 1</Link> |{" "}
        <Link to="/product/2">Product 2</Link>
      </nav>

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Counter */}
        <Route path="/counter" element={<Counter />} />

        {/* Hello */}
        <Route path="/hello" element={<Hello name="yahubaba" />} />

        {/* Product Page (dynamic ID) */}
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;