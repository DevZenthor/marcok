import "./App.css"
import Marcok from "./assets/marcok.png"
import FLC from "./assets/FLC.svg"
import TwoR from "./assets/2R.svg"
import OneP from "./assets/1P.svg"
import Dreyqan from "./assets/dreyqan.jpg"
import Baki from "./assets/baki.jpg"
import Zuki from "./assets/zuki.jpg"
import Novac from "./assets/novax.jpg"
import { FaYoutube, FaTwitch, FaTiktok, FaTwitter } from "react-icons/fa"

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-box">
          <div className="logo">Marcok</div>

          <ul className="nav-links">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#reseaux">Réseaux</a></li>
            <li><a href="#collab">Collab</a></li>
            <li><a href="#carriere">Carrière</a></li>
            <li><a href="#live">Live</a></li>
          </ul>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="hero" className="hero">
        <div className="avatar-wrapper">
          <img src={Marcok} alt="Marcok" className="avatar" />
        </div>

        <h1 className="title">Marcok</h1>

        <p className="description">
          Streamer passionné, Manager stratégique et Directeur Général de One Prodige.
        </p>
      </section>

      {/* ================= RESEAUX ================= */}
      <section id="reseaux" className="reseaux">
        <h2>Mes Réseaux</h2>

        <div className="cards">
          <a href="https://www.youtube.com/@marcoktwitch" target="_blank" rel="noopener noreferrer" className="card">
            <FaYoutube size={40}/> YouTube
          </a>

          <a href="https://www.twitch.tv/marcok" target="_blank" rel="noopener noreferrer" className="card">
            <FaTwitch size={40}/> Twitch
          </a>

          <a href="https://www.tiktok.com/@marcokontwitch" target="_blank" rel="noopener noreferrer" className="card">
            <FaTiktok size={40}/> TikTok
          </a>

          <a href="https://x.com/marcokttv" target="_blank" rel="noopener noreferrer" className="card">
            <FaTwitter size={40}/> Twitter
          </a>
        </div>
      </section>

      {/* ================= COLLAB ================= */}
      <section id="collab" className="collab">
        <h2>Mes Collaborations</h2>

        <div className="collab-cards">

          <a href="https://x.com/dreyqan" target="_blank" rel="noopener noreferrer" className="collab-card">
            <img src={Dreyqan} alt="Dreyqan" />
            <h3>Dreyqan</h3>
            <span className="status">F/A</span>
          </a>

          <a href="https://x.com/coach_baki" target="_blank" rel="noopener noreferrer" className="collab-card">
            <img src={Baki} alt="Baki" />
            <h3>Baki</h3>
            <span className="status">F/A</span>
          </a>

          <a href="https://x.com/VZuki_1" target="_blank" rel="noopener noreferrer" className="collab-card">
            <img src={Zuki} alt="Zuki" />
            <h3>Zuki</h3>
            <span className="status">F/A</span>
          </a>

          <a href="https://x.com/novax7q" target="_blank" rel="noopener noreferrer" className="collab-card">
            <img src={Novac} alt="Novac" />
            <h3>Novac</h3>
            <span className="status">F/A</span>
          </a>

        </div>
      </section>

      {/* ================= CARRIERE ================= */}
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

      {/* ================= LIVE ================= */}
      <section id="live" className="live">
        <h2>Live en cours</h2>

        <div className="live-wrapper">
          <iframe
            src="https://player.twitch.tv/?channel=marcok&parent=marcok.vercel.app"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default App