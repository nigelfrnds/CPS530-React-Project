import React, { Component } from 'react';
import ListContainer from './ListContainer';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], inputText: '' };;
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputText } = this.state;
    if(!inputText.length) {
      return;
    } else {
      const newItem = {
        text: inputText,
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        inputText: '',
      }));
    }
  }

  render() {
    const { title } = this.props;
    const { items, inputText } = this.state;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading" style={{ textAlign: 'center' }}>
          {title.toUpperCase()}
        </div>
        <div className="panel-body">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control"
                value={inputText}
                onChange={this.handleChange}
              />
              <br />
              <button className="btn btn-primary">Add Item {items.length+1}</button>
            </form>
          </div>
          <br />
          <ListContainer items={items} />
        </div>
      </div>
    );
  }
}

export default GroceryList;
