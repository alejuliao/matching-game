import CardGame from './src/components/CardGame'
import './style.css'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()


$root.insertAdjacentHTML('beforeend', $htmlCardGame)