
function Mudarestado(disc, quest) {
  let display = document.getElementById(disc).style.display
  let text = document.getElementById(quest).style.fontWeight

  if (display == 'none') document.getElementById(disc).style.display = 'block'
  else document.getElementById(disc).style.display = 'none'

  if (text == 'normal') document.getElementById(quest).style.fontWeight = 'bold'
  else document.getElementById(quest).style.fontWeight = 'normal'
}