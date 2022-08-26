
import axios from 'axios';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listName: [],
      welcom: []
    }
  }
  getInfo = async () => {
    const gitData = await axios.get('http://localhost:3005/name')
    // console.log(gitData)
    this.setState({


      listName: gitData.data
    })


  }

  saywelcome = async () => {
    const gitInfo = await axios.get('http://localhost:3005/userlist')
    console.log(gitInfo)
    this.setState({
      welcom: gitInfo.data.listOfName
    })
  }


  render() {
    return (
      <div className="App" >
        <button onClick={this.getInfo}>click here</button>
        <button onClick={this.saywelcome}>click here</button>

        {


          this.state.listName.map(item => {
            return (
              <>

                <li>{item}</li>
              </>
            )
          })

        }

        {
          this.state.welcom.map(item => {
            return (
              <h1>{item}</h1>
            )
          })
        }

      </div >
    );
  }
}

export default App;
