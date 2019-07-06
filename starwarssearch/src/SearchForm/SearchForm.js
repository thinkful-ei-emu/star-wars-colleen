import React from 'react'

export default class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm : {value: ''},
      touched: false
    }
  }
  updateSearchTerm(e){
    this.setState({
      searchTerm: {value : e.target.value}
    })
  }
  handleSearch(){
    fetch(`https://swapi.co/api/people/?search=${this.state.searchTerm.value}`)
    .then(res=> {
      if(!res.ok)
        {return res.json().then(error => console.log(error))}
      return res.json()})
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
  }
  render(){
    return (
      <form onSubmit={this.handleSearch}>
        <label htmlFor="name">Search Characters By Name:</label>
        <input type="text" onChange={e=>this.updateSearchTerm(e.target.value)} ></input>
        <button disabled={this.validate}>Search</button>
      </form>
    )
  }
}