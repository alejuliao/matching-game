import BoardGame from './src/objects/BoardGame'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'


const $root = document.querySelector('#root')
const $htmlBoardGame = BoardGame(3)


$root.insertAdjacentHTML('beforeend', $htmlBoardGame)