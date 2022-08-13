const col = document.querySelectorAll('.col')
const dayLabels = document.querySelectorAll('.day')
const bars = document.querySelectorAll('.bar')
const currDay = new Date().getDay()

const dayToNum = {
  'sun': 0, 
  'mon': 1,
  'tue': 2,
  'wed': 3,
  'thu': 4,
  'fri': 5,
  'sat': 6,
}

async function showGraph(){
  const resp = await fetch('./data.json')
  const json = await resp.json()
  const days = json.map(data => data.day)
  const barHeights = json.map(data => data.amount)

  for (const [index, day] of days.entries()) { 
    let text = document.createTextNode(day)
    bars[index].style.height = `${barHeights[index] * 2.5}px`
    col[index].appendChild(bars[index])
    dayLabels[index].appendChild(text)
    col[index].appendChild(dayLabels[index])

    if(dayToNum[day] === currDay % 7) { 
      bars[index].classList += ' today '
    } 
  }
}


showGraph()

