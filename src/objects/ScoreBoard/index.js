import ArrowDown from '../../components/ArrowDown'
import PlayerName from '../../components/PlayerName'
import PlayerScore from '../../components/PlayerScore'
import VsPlayer from '../../components/VsPlayer'
import './style.css'
function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown(2)}
      ${PlayerName('Player 3')}
      ${PlayerScore(2)}
      ${VsPlayer()}
      ${PlayerScore(3)}
      ${PlayerName('Player 2')}
    </header>
  `
}
export default ScoreBoard
