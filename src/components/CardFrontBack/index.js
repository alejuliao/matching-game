import CardGame from '../CardGame';
import './style.css';
function CardFrontBack(){
  return /*html*/`
    <article class="card-front-back">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("JS", 'Logo do javascript')}
      </div>
    </article>
  `
}

export default CardFrontBack;