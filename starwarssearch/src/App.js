import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';
import LoadingSpinner from './LoadingSpinner'

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    results: [],
    loading: false
  }
}
addResults=(data)=>{
this.setState({
  results: data
})
}
isLoading=(loading)=>{
  this.setState({
    loading: loading
  })
}



  render(){
    return <div className='App'>
      <Header />
      <SearchForm addResults={(data)=>this.addResults(data)}
      isLoading={(loading)=>this.isLoading(loading)}/>
      {this.state.loading ? <LoadingSpinner /> : <ResultsList results={this.state.results} />}

    </div>
  }
}
export default App;
