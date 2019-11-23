import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    let query = {term};
    fetch('/repos', {
      method: 'POST',
      body: JSON.stringify(query),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then (() => {
      this.componentDidMount();
    })
    .catch ((err) => {
      console.log('err: ', err);
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }

  componentDidMount () {
    fetch('/repos', {
      method: 'GET'
    })
    .then (response => response.json())
    .then (data => {
      this.setState({
        repos: data.slice(0, 25)
      });
    })
    .catch ((err) => {
      console.log('err: ', err);
    });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
