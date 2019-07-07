import React from "react";

export default class ResultsList extends React.Component {
  render() {
    const results = this.props.results.map((result, index) => (
      <li key={index}>{result.name}</li>
    ));
    return <ul className="results">{results}</ul>;
  }
}
