import { useState } from "react";
import "./styles.css";

const DecideNav = () => {
  const [button, setButton] = useState("X");
  if (button === "=") {
    return (
      <nav className="mobile-nav">
        <button onClick={() => setButton("X")}>X</button>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Blogs</a>
        <a href="#">Talks</a>
        <a href="#">Contact</a>
      </nav>
    );
  } else {
    return (
      <nav>
        <button onClick={() => setButton("=")}>=</button>
      </nav>
    );
  }
};

export default function App() {
  return (
    <div className="App">
      <header>
        <cite>my name</cite>
        <DecideNav />
        <nav className="desktop-nav">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">Talks</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <section className="intro">
          <h1>about me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="projects">
          <h1>my projects</h1>
          <article>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <h3>project name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <h3>project name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <h3>project name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </section>
      </main>
      <footer>
        <h3>footer heading</h3>
        <nav>some links</nav>
      </footer>
    </div>
  );
}
