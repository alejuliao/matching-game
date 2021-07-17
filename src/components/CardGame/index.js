import './style.css';
function CardGame(icon="🃏", alt="titulo"){
  // <img src="images/${icon}.png" alt="${alt}"/>
  return /*html*/`
    <article class='card-game'>
      <h1>${icon}</h1>
    </article>
  `
}
export default CardGame;