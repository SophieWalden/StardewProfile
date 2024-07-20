
import './userPage.css';
import React from 'react';

import CollapsibleTable from './collapseTable';

function UserPage(props) {



  return (
    <div className="container">

      <h3 id="user-header">{props.userData.name}</h3>
      <div className="userPage">
      <div id="content">
        

        <div id="user-description">
          <p><b>Sophie</b> is a software developer from Orono, Maine. Her family owns five cats and she is learning the guitar (Currently on the hunt to find a classical guitar to buy)</p>
        </div>

        <div id="user-schedule">
          <h3 className="subheader">Schedule</h3>

          <p>Weekdays you can find Sophie going into the office. There she can be found programming and swearing that one day she will solve the office puzzle</p>
          <p>On rainy days, Sophie likes to work from her house. She always opens her window to feel the breeze and listen to the sounds of pitter patter as she works</p>
          <p>On most weekends you can find Sophie hanging out with her friends doing many activities: making music, watching movies, or going on hikes</p>

        </div>

        <div id="user-projects">
          <h3 className="subheader">Projects</h3>

          <p>Sophie likes to develop side projects in many areas. You can find her jumping around from serious websites to silly applications of AI.</p>

          <CollapsibleTable headerColor="92, 214, 92" contentColor="38, 160, 38" title={<div className="collpase-header"><img src="https://stardewvalleywiki.com/mediawiki/images/5/58/Dwarf_Gadget.png"></img> <h3>Lab Website</h3></div>} children={
            <div>
              <h3>UMaine's ECE Research Lab Website</h3>
              <p>Sophie developed a website for Prabuddha @ the siege lab</p>
              <p>The site features are auto populated by a connected Firebase database for the lab members to easily add and edit content</p>
              <p>Check it out here: <a href="https://sophiewalden.github.io/lab-website/">Link to Site</a></p>
            </div>
          }></CollapsibleTable>

          <CollapsibleTable headerColor="198, 138, 0" contentColor="198, 138, 0" title={<div className="collpase-header"><img src="https://stardewvalleywiki.com/mediawiki/images/d/dc/Sam%27s_Old_Guitar.png"></img> <h3>Guitar Tutorial Hub</h3></div>} children={
            <div>
              <h3>Guitar Tutorial Hub</h3>
              <p>Sophie has been learning a lot of guitar from YouTube tabs</p>
              <p>She made a site that you can select and make playlist of common tabs to automatically playthrough</p>
              <p>Great for short practice sessions</p>
              <p>(The styling needs to be improved)</p>
              <p>Check it out here: <a href="https://sophiewalden.github.io/Guitar-Tutorial-Hub/">Link to Site</a></p>
            </div>
          }></CollapsibleTable>

      <CollapsibleTable headerColor="102, 204, 255" contentColor="68, 155, 237" title={<div className="collpase-header"><img src="https://stardewvalleywiki.com/mediawiki/images/2/25/Battery_Pack.png"></img> <h3>Genetic Algorithim Neural Networks</h3></div>} children={
            <div>
              <h3>Genetic Algorithimic Neural Networks</h3>
              <p>Self-built neural networks that evolve using the Genetic Algorithim</p>
              <p>Built as my summer project after graduating highschool</p>
              <p>Application is Neural Networks evolving to learn how to drive a car</p>
              <p>No site, but find the repository with more information here:  <a href="https://github.com/SophieWalden/selfDrivingCarGeneticAlgo">Link to Site</a></p>

            </div>
          }></CollapsibleTable>

      <CollapsibleTable headerColor="249, 97, 103" contentColor="150, 0, 0" title={<div className="collpase-header"><img src="https://stardewvalleywiki.com/mediawiki/images/0/0e/Brown_Book.png"></img> <h3>Chess Vision</h3></div>} children={
            <div>
              <h3>Chess Vision</h3>
              <p>Classifying Chess Boards through Computer Vision</p>
              <p>Able to get 97% Piece Accuarcy from images of any rotation of chess boards</p>
              <p>Find my Video Presentation on it here: <a href="https://youtu.be/SnrpYfKB7sY?si=JtUVjXyjqp-tenAL">Link</a></p>
              <p>Find my Paper on it here:  <a href="https://beige-erin-5.tiiny.site/">Link</a></p>
              <p>And find the code I made here:  <a href="https://github.com/SophieWalden/ChessVision">Link</a></p>

            </div>
          }></CollapsibleTable>
            
          

        </div>

        <div id="user-gifts">
          <h3 className="subheader">Likes</h3>
          <p>Find below a mix of Sophie's favorites, from tech stacks to  socks</p>

          <table className="siteTable">
            <thead><tr><th class="unsortable">Image
              </th>
              <th class="tableNameColumn" tabindex="0" role="columnheader button" title="Sort ascending">Name
              </th>
              <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Description
              </th></tr></thead>

              <tbody>
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://i.imgur.com/TuaZ2lf.png"></img></td>
                  <td className="name-column"><h4>Cats</h4></td>
                  <td><p>Fun fact: I am named after that cat in the icon photo</p></td>
                </tr>
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarOTaL6DUVb8_S2oVqK7uVijjKzeR7WVChg&s"></img></td>
                  <td className="name-column"><h4>Flexboxes</h4></td>
                  <td><p>I love dynamic web layouts</p></td>
                </tr>
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://alittleandalot.com/wp-content/uploads/2018/02/600-Indian-shrimp-6.jpg"></img></td>
                  <td className="name-column"><h4>Tofu, Sauce, and Rice</h4></td>
                  <td><p>My favorite meal! Its a family recipe and I love making it</p></td>
                </tr>
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://github.com/facebook/react/wiki/react-logo-1000-transparent.png"></img></td>
                  <td className="name-column"><h4>React</h4></td>
                  <td><p>Frontend library for most of my site development (Other is Vue.Js)</p></td>
                </tr>
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"></img></td>
                  <td className="name-column"><h4>MongoDB</h4></td>
                  <td><p>Preferred database. Connect to with Pymongo and python-built Flask APIs</p></td>
                </tr>
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://img.freepik.com/premium-psd/acoustic-guitar-isolated-transparent-background-guitar-png-clipart-generative-ai_667511-3827.jpg"></img></td>
                  <td className="name-column"><h4>Music</h4></td>
                  <td><p>Love listening and playing. Find my spotify <a href="https://open.spotify.com/user/31xoj6kc6qhw2neogpn5xuk5my2q">here</a></p></td>
                </tr>
                
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://img.itch.zone/aW1hZ2UyL2phbS8zMzE4NjgvMTI0OTI0MTkucG5n/original/lOCM%2Be.png"></img></td>
                  <td className="name-column"><h4>Incremental Game Jam</h4></td>
                  <td><p>Made 2 games for this game jam. Learned so much from the community</p></td>
                </tr>
               
                
                <tr>
                  <td className="icon-column"><img className="table-image" src="https://user-images.githubusercontent.com/46412508/170405943-e75458ec-6cb4-462e-91ba-43c861a3d6cf.png"></img></td>
                  <td className="name-column"><h4>Pygame</h4></td>
                  <td><p>Python display library I use for most of my rapid prototyping</p></td>
                </tr>
              
              </tbody>
          </table>
        </div>

        <div id="user-trivia">
          <h3 className="subheader">Trivia</h3>
          <p>Here are a couple question and answer tidbits about Sophie</p>

          <div className="question"><h5>What is one thing you couldn't live without?</h5><p>Water</p></div>
          <div className="question"><h5>What is your favorite podcast?</h5><p>Reply All! I re-listen to their old episodes constantly</p></div>
          <div className="question"><h5>What is your favorite game?</h5><p>Teamfight Tactics. Its a strategy game I have been invested since it launched in 2019</p></div>
          <div className="question"><h5>Can you do a backflip?</h5><p>no</p></div>
          <div className="question"><h5>How many guitars do you have?</h5><p>Currently I have 2 guitars and a bass. I am looking to pickup a classical guitar though</p></div>
        </div>

        <div id="user-trivia">
          <h3 className="subheader">History</h3>

          <ul>
            <li><p>August 22nd, 2004 (1.0): Introduced</p></li>
            <li><p>June, 2021: Graduated Highschool</p></li>
            <li>  <p>August 2021: Went off to University of Maine</p></li>
            <li> <p>September, 2021: Hired by the campus's premiere lab: ASCC (Still working there)</p></li>
            <li>  <p>Summer, 2022: Took part in Codepaths Tech Interview Prep Class</p></li>
            <li>  <p>Summer, 2023: Came back to Codepath in a Teachers Assistant role</p></li>
            <li>  <p>Summer, 2024: Summer Internship at Tyler Technologies</p></li>
          </ul>

        </div>
      </div>

      <div id="infobox">
 
        <table id="infoboxtable">
          <tbody>

                <tr>
                <td colspan="2">
                   <h2 id="name-header">Sophie</h2>
                </td>
                </tr>

                <tr>
                <td colspan="2">
                  <div className="image-container">
                      <img id="profile-picture" src="https://i.imgur.com/12R1sUr.png"></img>
                    </div>
                </td>
                </tr>
                
                <tr>
                <td colspan="2" id="infoboxsection">Information
                <p class="mw-empty-elt">
                </p>
                </td></tr><tr>
                <td id="infoboxsection">Birthday
                </td>
                <td id="infoboxdetail"> <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Fall.png/24px-Fall.png"></img> August 22nd
                </td></tr>
                <tr>
                <td id="infoboxsection">Lives In
                </td>
                <td id="infoboxdetail"> Orono, Maine
                </td></tr>
                <tr>
                <td id="infoboxsection">Job
                </td>
                <td id="infoboxdetail"> Software Developer
                </td></tr>
                <tr>
                <td id="infoboxsection">School
                </td>
                <td id="infoboxdetail">University of Maine
                </td></tr>
                <tr>
                <td id="infoboxsection">Hobbies
                </td>
                <td id="infoboxdetail">
                    <span class="nametemplate"><img src="https://stardewvalleywiki.com/mediawiki/images/d/dc/Sam%27s_Old_Guitar.png"></img><a href="https://sophiewalden.github.io/Guitar-Tutorial-Hub/">Guitar</a></span>
                    <span class="nametemplate"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b1/Movie_Ticket.png"></img><a href="https://letterboxd.com/SophlockHolmes/">Watching Movies</a></span>
                    <span class="nametemplate"><img src="https://stardewvalleywiki.com/mediawiki/images/f/f8/Farm_Computer.png"></img><a href="https://github.com/SophieWalden">Programming</a></span>
                </td>
                </tr>
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
}

export default UserPage;
