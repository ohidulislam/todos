import React, { Component } from 'react'

const inputStyle = {
    padding: '0 20px'
}

class AddTodo extends Component {
    state = {
        content: '',
        isInputEmpty: true
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            isInputEmpty: false
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.isInputEmpty !== true) {
            this.setState({
                content: '',
                isInputEmpty: true
            })
            this.props.addTodo(this.state.content)
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input style={inputStyle} type="text" id="content" value={this.state.content} onChange={this.handleChange} />
                <button className="btn-floating btn-large waves-effect waves-light green lighten-1"><i className="material-icons">+</i></button>

            </form>
        )
    }
}

export default AddTodo