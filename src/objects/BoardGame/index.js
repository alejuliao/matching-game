import CardFrontBack from "../../components/CardFrontBack"
import './style.css'

function BoardGame(amountCards){

  const $htmlCardFrontBack = CardFrontBack()

  const $htmlContent = $htmlCardFrontBack.repeat(amountCards)



  return `
    <article class="board-game">
      ${$htmlContent}
    </article>
  `
}
export default BoardGame