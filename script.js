
//construtor recebe os dados e passa para a var 
class Calculator {
    constructor(previousOpreandTextElement,currentOperandTextElement) {
        this.previousOpreandTextElement = previousOpreandTextElement
        this.currentOperandTextElement - currentOperandTextElement
    }

    clear() {

    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if (this.previousOpreand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOpreand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}









//selecionando os dados para as var
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-dalete]')
const allClearButton = document.querySelector('[data-allClear]')
const previousOpreandTextElement = document.querySelector('[data-previousOperand]')
const currentOperandTextElement = document.querySelector('[data-currentOperand]')

const calculator = new Calculator(previousOpreandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})