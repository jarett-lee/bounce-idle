// src/js/game-state.js

import generateRandomColor from './generate-random-color.js'

export default class GameState {
  constructor () {
    this.balls = []
    this.blocks = []
    this.width = 300
    this.height = 300
  }
  addBall () {
    const maxSpeed = 300
    const ballRadius = 10

    const ball = {
      x: Math.random() * (this.width - ballRadius),
      y: Math.random() * (this.height - ballRadius),
      dx: (Math.random() * maxSpeed) - (maxSpeed / 2),
      dy: (Math.random() * maxSpeed) - (maxSpeed / 2),
      width: ballRadius,
      color: generateRandomColor()
    }

    this.balls.push(ball)
  }
  addBlock () {
    const blockSize = 20

    const block = {
      x: Math.random() * (this.width - blockSize),
      y: Math.random() * (this.height - blockSize),
      width: blockSize
    }

    this.blocks.push(block)
  }
}
