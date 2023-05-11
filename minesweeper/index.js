const width = 15
const height = 15
const bombsCount = 50
let boardSize = width * height

function createBoard(size) {
  const board = document.createElement('div')
  board.classList.add('board')
  for (let i = 0; i < size; i++) {
    const button = document.createElement('div')
    button.classList.add('button')
    button.id = i + 1
    board.append(button)
  }
  return board
}

const createBombs = (size, count) => {
  const bombs = []
  for (let i = 0; i < count; i++) {
    bombs.push(Math.round(0.5 + Math.random() * size))
  }
  return bombs
}
const board = createBoard(boardSize)
const bombs = createBombs(boardSize, bombsCount)
console.log(bombs)
const body = document.querySelector('body')
body.append(board)

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    if (bombs.includes(Number(e.target.id))) {
      e.target.innerHTML = 'B'
      e.target.classList.add('disabled')
    } else {
      const bombsCount = getBombs(Number(e.target.id))
      e.target.innerHTML = bombsCount
    }
  }
})
const getBombs = (cellId) => {
  console.log(cellId)
  const column = cellId % width !== 0 ? cellId % width : width
  const row = Math.ceil(cellId / width)
  let count = 0
  if (row !== 1 && row !== width && column !== 1 && column !== width) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (bombs.includes((row + i - 1) * width + column + j)) {
          count++
        }
      }
    }
  } else if (column === 1) {
    for (let i = -1; i <= 1; i++) {
      for (let j = 0; j <= 1; j++) {
        if (bombs.includes((row + i - 1) * width + column + j)) {
          count++
        }
      }
    }
  } else if (column === width) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 0; j++) {
        if (bombs.includes((row + i - 1) * width + column + j)) {
          count++
        }
      }
    }
  } else if (row === 1) {
    for (let i = 0; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (bombs.includes((row + i - 1) * width + column + j)) {
          count++
        }
      }
    }
  } else if (row === width) {
    for (let i = -1; i <= 0; i++) {
      for (let j = -1; j <= 1; j++) {
        if (bombs.includes((row + i - 1) * width + column + j)) {
          count++
        }
      }
    }
  }
  return count
}
