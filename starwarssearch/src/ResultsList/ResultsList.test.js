import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';
import renderer from 'react-test-renderer'
const results = [{name: 'Anakin'}, {name: 'Wookie'}, {name: 'jabba'}]
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultsList results={results}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders the UI as expected', () => {
  const tree = renderer
    .create(<ResultsList results={results}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });