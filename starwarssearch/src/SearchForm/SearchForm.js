import React from 'react'
import ValidateForm from './ValidateForm'

export default class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm : {value: '', touched: false},
      searchType : {value: 'planets'}
    }
  }
  updateSearchTerm(term){
    this.setState({
      searchTerm: {value : term, touched: true}
    })
  }
  updateSearchType(value){
    console.log(value)
   let term = value.toLowerCase();
    this.setState({
      searchType : {value: term}
    })
  }
  validateSearch(){
    const term = this.state.searchTerm.value.trim()
    if(term.length === 0){
      return 'Search is required'
    }
  }
  handleSearch(event){
    this.props.isLoading(true)
    event.preventDefault()
    const searchTerm = this.state.searchTerm.value
    let searchType = this.state.searchType.value
    fetch(`https://swapi.co/api/${searchType}/?search=${searchTerm}`)
    .then(res=> {
      if(!res.ok)
        {return res.json().then(error => alert(error))}
      return res.json()})
    .then(data => {this.props.isLoading(false);
        const results = data.results; 
        this.props.addResults(results)})
    .catch(error => alert(error.message))
  }
  render(){
    const errorMessage = this.validateSearch()
    return (
      <form onSubmit={e=>this.handleSearch(e)}>
        <label htmlFor="name">Search Characters By:</label>
        <select onChange={(e)=>this.updateSearchType(e.target.value)}>
          <option>Planets</option>
          <option>People</option>
          <option>Spaceships</option>
          <option>Vehicles</option>
          <option>Characters</option>
          <option>Films</option>
          <option>Species</option>
        </select>
        <input type="text" onChange={(e)=>this.updateSearchTerm(e.target.value)} ></input>
        {this.state.touched&&<ValidateForm message={errorMessage}/>}
        <button type="submit" disabled={this.validateSearch()}>Search</button>
      </form>

    )
  }
}