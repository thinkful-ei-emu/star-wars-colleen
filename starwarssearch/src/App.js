import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList'

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    results: []
  }
}
addResults=(data)=>{
this.setState({
  results: data
})
console.log(this.state)

}

populateList = (results)=>{

}
  render(){
    return <div className='App'>
      <Header />
      <SearchForm addResults={(data)=>this.addResults(data)}/>
      <ResultsList results={this.state.results}/>
    </div>
  }
}
export default App;
