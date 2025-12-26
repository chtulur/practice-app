import PlayerList from './Player/PlayerList'
import TeamTable from './Team/TeamTable'
import Pitch from './Pitch/Pitch'
import './App.css'

const App = () => (
  <div className='app'>
    <div className='player-team-container flex gap-4 justify-around'>
      <PlayerList />
      <TeamTable />
    </div>
    {/* <Pitch /> */}
  </div>
)

export default App

//TODO: features to implement
/*
- add players
- randomize teams
- keep score
- reset scores
- game mode dropdown(?) (maybe later?)
- table for player names (delete icon, edit icon to change player name)
- table for teams
- the pich diagram
- start game button, stop game button
- skip turn button
- undo redo buttons
- local storage
- round tracker
- player list also be a leaderboard that updates
*/

//TODO: ideas for later
/*
- animations
- sound effects
- different themes / colors
- different game modes
- player profiles
- statistics tracking
*/
