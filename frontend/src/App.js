import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
  {
      "id": 1,
      "name": "sujon",
      "email": "sujon@kutumbita.com",
      "message": "hello"
  },
  {
      "id": 2,
      "name": "test",
      "email": "test@mail.com",
      "message": "sss"
  }
]


class App extends Component {
  state = {
    lead : []
  };

  async componentDidMount(){
    try {
      const res = await fetch('http://127.0.0.1:8000/api/lead/');
      const lead = await res.json();
      this.setState({
        lead
      })
    } catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <dev> 
        {this.state.lead.map(
          item => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <h1>{item.email}</h1>
              <span>{item.message}</span>
            </div>
          )
        )}
      </dev>
    );
  }
}

export default App;
