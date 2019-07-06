import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm/SearchForm'

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    results: []
  }
}
addResults = (data)=>{
this.setState({
  results: data
})
}
populateList = (results)=>{

}
  render(){
    return <div className='App'>
      <Header />
      <SearchForm addResults={()=>this.addResults()}/>
    </div>
  }
}
export default App;
