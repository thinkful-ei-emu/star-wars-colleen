import React from 'react'
import ValidateForm from './ValidateForm'

export default class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm : {value: '', touched: false},
    }
  }
  updateSearchTerm(term){
    this.setState({
      searchTerm: {value : term, touched: true}
    })
  }
  validateSearch(){
    const term = this.state.searchTerm.value.trim()
    if(term.length === 0){
      return 'Search is required'
    }
  }
  handleSearch(event){
    event.preventDefault()
    const searchTerm = this.state.searchTerm.value
    fetch(`https://swapi.co/api/people/?search=${searchTerm}`)
    .then(res=> {
      if(!res.ok)
        {return res.json().then(error => console.log(error))}
      return res.json()})
    .then(data => {const results = data.results; this.props.addResults(results)})
    .catch(error => console.log(error.message))
  }
  render(){
    const errorMessage = this.validateSearch()
    return (
      <form onSubmit={e=>this.handleSearch(e)}>
        <label htmlFor="name">Search Characters By Name:</label>
        <input type="text" onChange={(e)=>this.updateSearchTerm(e.target.value)} ></input>
        {this.state.touched&&<ValidateForm message={errorMessage}/>}
        <button type="submit" disabled={this.validateSearch()}>Search</button>
      </form>
    )
  }
}