import React from "react";
import Article from "./article";
import Comment from "./Comment";
import NavBar from "./Navbar";
import About from "./About";
import Home from "./Home";

// function NavBar() {
//   return (
//     <nav>
//       <a href="#home">I'm a link!</a>
//     </nav>
//   );
// }

// function Home() {
//   return (
//     <div id="home">
//       <h1>Home</h1>
//     </div>
//   );
// }

// {/* write an <About> component here */}
// function About(){
//   return(
//     <div>About</div>
//   )

// }


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Comment />
      <About />

      
    </div>
  );
}

export default App;
