
import './App.scss';
import homeImg from './images/home-img.svg';


function App() {
let navbar= document.querySelector('.header .navbar');
let menu = document.querySelector('.menu-btn');

menu.onclick = () => {
  navbar.classList.toggle('active');
}

  return (
    <div className="app">
      <header className="header">
          <a href="1" className="logo">design </a>
          <nav className="navbar">
              <a href="#home" > home </a>
              <a href="#services" > services </a>
              <a href="#about" > about </a>
              <a href="#features" > features </a>
              <a href="#pricing" > pricing </a>
              <a href="#home" > FAQ </a>       
              
          </nav>
          <div className="menu-btn"> 
              <div></div>
              <div></div>
              <div></div>
           </div>
          <a href="1" className="btn-join"> join us </a>
      </header>
      <section className="home">
          <div className="image">
            <img src={homeImg} alt="home-img"></img>
          </div>
      </section>
      
      <div className="test"></div>
    </div>
  );
}

export default App;
