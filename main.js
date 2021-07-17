import CardGame from './src/components/CardGame'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'


const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()


$root.insertAdjacentHTML('beforeend', $htmlCardGame)