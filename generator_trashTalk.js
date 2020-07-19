function randomPhrase() {
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const randomIndex = Math.floor(Math.random() * phrase.length)
  return phrase[randomIndex]
}
function trashTalk(job) {
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  if (job) {
    const randomIndex = Math.floor(Math.random() * task[job].length)
    return `身為一個${target[job]}，${task[job][randomIndex]}${randomPhrase()}吧!`
  }
  return `選一種職業講幹話吧!`
}
module.exports = trashTalk