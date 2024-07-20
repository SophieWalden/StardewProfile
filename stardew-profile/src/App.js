import logo from './logo.svg';
import './App.css';
import React from 'react';

import UserPage from "./components/userPage.jsx";

function App() {

  var userData = {"name": "Sophie Walden"}

  return (
    <div className="App">
      <div id="leftContent">
        
           {/* <a title="Visit the main page" class="mw-wiki-logo" href="/Stardew_Valley_Wiki"><img class='wiki-image' src='https://stardewvalleywiki.com/mediawiki/extensions/StardewValley/images/site_logo_sm.png?58e2b'></img></a> */}
      </div>
      <div id="rightContent">
        <div id="navigationPages">
            {/* <div id="navigationLinks">
              <h3>Page</h3>
              <h3>Discussion</h3>
              <h3>Read</h3>

            </div> */}
        </div>

        <div id="mainContent">

          <UserPage userData={userData}/>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
