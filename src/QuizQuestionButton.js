import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleClick.bind(this)
    }
    handleClick() {
        this.props.clickHandler(this.props.button_text)
        if (this.props.quiz_question.answer === this.props.button_text) {
            this.props.showNextQuestion()
        }
    }
    render() {
        return (
            <li><button onClick={this.handleClick}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton