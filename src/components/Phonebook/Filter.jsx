import React from 'react';
import css from './Css/Filter.module.css'

class Filter extends React.Component {
  handleChange = (event) => {
    this.props.onChangeFilter(event.currentTarget.value.toLowerCase());
  };

  render() {
    const { filter } = this.props;

    return (
      <input
        type="text"
        placeholder=" Search by name"
        value={filter}
        onChange={this.handleChange}
        className={css.input}
      />
    );
  }
}

export default Filter;
