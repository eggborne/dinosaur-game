import style from '../css/styles.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      menuSummoned: false,

    };
    

  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps() {


  }

  render() {
    return (
      <div id='main'>

      </div>
    );
  }
}



export default App;