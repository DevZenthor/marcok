import "./App.css"
import Marcok from "./assets/marcok.png"
import FLC from "./assets/FLC.svg"
import TwoR from "./assets/2R.svg"
import OneP from "./assets/1P.svg"
import { FaYoutube, FaTwitch, FaTiktok, FaTwitter } from "react-icons/fa"

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-box">
          <div className="logo">Marcok</div>

          <ul className="nav-links">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#reseaux">Réseaux</a></li>
            <li><a href="#carriere">Carrière</a></li>
            <li><a href="#live">Live</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="avatar-wrapper">
          <img src={Marcok} alt="Marcok" className="avatar" />
        </div>

        <h1 className="title">Marcok</h1>

        <p className="description">
          Streamer passionné, Manager stratégique et Directeur Général de One Prodige.
        </p>
      </section>

      {/* RESEAUX */}
      <section id="reseaux" className="reseaux">
        <h2>Mes Réseaux</h2>

        <div className="cards">
          <a href="https://www.youtube.com/@marcoktwitch" className="card" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={40}/> YouTube
          </a>

          <a href="https://www.twitch.tv/marcok" className="card" target="_blank" rel="noopener noreferrer">
            <FaTwitch size={40}/> Twitch
          </a>

          <a href="https://www.tiktok.com/@marcokontwitch" className="card" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={40}/> TikTok
          </a>

          <a href="https://x.com/marcokttv" className="card" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40}/> Twitter
          </a>
        </div>
      </section>

      {/* CARRIERE */}
      <section id="carriere" className="carriere">
        <h2>Carrière</h2>

        <div className="carriere-cards">

          <a href="https://x.com/FLCclan_" target="_blank" rel="noopener noreferrer" className="carriere-card">
            <img src={FLC} alt="FLC Logo" />
            <h3>FLC Clan</h3>
            <p>Directeur Web</p>
          </a>

          <a href="https://x.com/2R_Esport" target="_blank" rel="noopener noreferrer" className="carriere-card">
            <img src={TwoR} alt="2R Logo" />
            <h3>2R Esport</h3>
            <p>Directeur Web</p>
          </a>

          <a href="https://x.com/oneprodige" target="_blank" rel="noopener noreferrer" className="carriere-card">
            <img src={OneP} alt="1P Logo" />
            <h3>One Prodige</h3>
            <p>Directeur Web (actuel)</p>
          </a>

        </div>
      </section>

      {/* LIVE */}
      <section id="live" className="live">
        <h2>Live en cours</h2>

        <div className="live-box">
          <iframe
            src="https://player.twitch.tv/?channel=marcok&parent=localhost"
            height="450"
            width="100%"
            allowFullScreen>
          </iframe>
        </div>
      </section>
    </>
  )
}

export default App