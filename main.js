import PlayerName from './src/components/PlayerName'
import BoardGame from './src/objects/BoardGame'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'


const $root = document.querySelector('#root')



$root.insertAdjacentHTML('beforeend', 

`
${PlayerName("Player 1")}
${PlayerName("Player 2")}

${BoardGame(6)}

`)