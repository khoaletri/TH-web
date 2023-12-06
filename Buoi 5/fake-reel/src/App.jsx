import "./App.css";
import ShortContainer from "./components/ShortContainer";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <div className="logo-container">
            <img src="public\logo.png" className="logo" alt="" />
          </div>

          <div className="search-container">
            <input
              type="text"
              className="search"
              placeholder="Search accounts and videos"
            />
            <span></span>
            <button>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <ul>
            <li>
              <ion-icon name="notifications-outline"></ion-icon>
            </li>
            <li>
              <img
                src="https://cdn.7tv.app/emote/6458075cf9eb48e0c55b3d45/4x.webp"
                alt=""
              />
            </li>
          </ul>
        </div>
      </nav>
      <main className="main">
        <aside>
          <ul className="user-nav">
            <li className="active">
              <ion-icon name="home-outline"></ion-icon>
              <span>For You</span>
            </li>
            <li>
              <ion-icon name="planet-outline"></ion-icon>
              <span>Explore</span>
            </li>
            <li>
              <ion-icon name="videocam-outline"></ion-icon>
              <span>Live</span>
            </li>
            <li>
              <ion-icon name="people-outline"></ion-icon>
              <span>Following</span>
            </li>
          </ul>
          <ul className="nav-help">
            <li>
              <ion-icon name="settings-outline"></ion-icon>
              <span>Settings</span>
            </li>
            <li>
              <ion-icon name="help-circle-outline"></ion-icon>
              <span>Help</span>
            </li>
            <li>
              <ion-icon name="flag-outline"></ion-icon>
              <span>Report</span>
            </li>
            <li>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span>Send Feedback</span>
            </li>
          </ul>
        </aside>
        <ShortContainer />
      </main>
    </div>
  );
}

export default App;
