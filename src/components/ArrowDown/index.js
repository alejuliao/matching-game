import './style.css'
function ArrowDown(currentPlayer = 1) {
  return /*html*/ `
  <img 
    class="arrow-down" 
    data-currentplayer="${currentPlayer}"
    src="images/arrow.svg" 
    alt="Icone de uma seta para baixo"/>
  `
}

export default ArrowDown
