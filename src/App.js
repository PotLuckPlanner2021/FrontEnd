import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pot Luck Planner</h1>
      </header>
      <body>
        <section className="stuff-to-bring">
          <h2>Click a Button to Claim an Item or to Switch</h2>
          <button className="item-one">
            Item One
          </button>
          <button className="item-two">
            Item Two
          </button>
        </section>
        <section className="member-profile">
          <div className="member-name">
            <img src={profilePic} classname="profile-pic" alt="profile pic">
            </img>
            <h2>{profileName}</h2>
            <p>Bringing: {itemNumber}</p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;

//
