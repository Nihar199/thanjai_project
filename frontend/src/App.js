
import './App.css';
import axios from 'axios';
import React from 'react';
class App extends React.Component {
  state = {details:[],}
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }
  render() {
    return (
      <div>
        <header> Data Generated here</header>
        <hr></hr>
        {this.state.details.map((output, id)=> (
          <div key ={id}> 
          <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>

          </div>
        </div>))}

      </div>



    )
  }

}


export default App;
