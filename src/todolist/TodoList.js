import React from 'react'
import TodoItems from '../todoitem/TodoItems'
import icon from '../images/Icon.png' 
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    addItem = e => {
        let newItem;
        
        if (this._inputElement.value !== '') {
            newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }));

        this._inputElement.value = '';

        e.preventDefault()
    }

    deleteItem = key => {
        let filteredItems = this.state.items.filter(item => {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <img src={icon} alt="icon" />
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={a => this._inputElement = a} 
                            placeholder="Enter Task"
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems 
                    entries={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        )
    }
}

export default TodoList