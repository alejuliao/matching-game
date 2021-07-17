import CardGame from "../../components/CardGame"
import './style.css'

function BoardGame(amountCards){

  const $htmlCardGame = CardGame()

  const $htmlContent = $htmlCardGame.repeat(amountCards)



  return `
    <article class="board-game">
      ${$htmlContent}
    </article>
  `
}
export default BoardGame