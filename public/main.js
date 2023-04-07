const button1 = document.querySelector('#plain button')
const button2 = document.querySelector('#animal button')
const button3 = document.querySelector('#char button')
const button4 = document.querySelector('#custom button')
const label1 = document.querySelector('#plain label')
const label2 = document.querySelector('#animal label')
const label3 = document.querySelector('#char label')
const label4 = document.querySelector('#custom label')

const labels = [label1, label2, label3, label4]

axios.get('http://localhost:4040/api/ducks')
  .then(res => {
    for(let i=0; i<labels.length; i++){
      num = res.data[i].count
      console.log(num)
      labels[i].textContent = num
    }
  })
  .catch(theseHands => console.log(theseHands))

button1.addEventListener('click', () => {
  axios.put('http://localhost:4040/api/ducks/plain')
    .then(res => {
      label1.textContent = res.data
    })
    .catch(theseHands => {
      console.log(theseHands)
    })
})
button2.addEventListener('click', () => {
  axios.put('http://localhost:4040/api/ducks/animal')
    .then(res => {
      label2.textContent = res.data
    })
    .catch(theseHands => {
      console.log(theseHands)
    })
})
button3.addEventListener('click', () => {
  axios.put('http://localhost:4040/api/ducks/char')
    .then(res => {
      label3.textContent = res.data
    })
    .catch(theseHands => {
      console.log(theseHands)
    })
})
button4.addEventListener('click', () => {
  axios.put('http://localhost:4040/api/ducks/custom')
    .then(res => {
      label4.textContent = res.data
    })
    .catch(theseHands => {
      console.log(theseHands)
    })
})