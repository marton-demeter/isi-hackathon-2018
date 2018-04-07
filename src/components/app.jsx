import React from 'react';
import s from './app.scss';
import Device from './device/device.jsx';
import axios from 'axios';
import io from 'socket.io-client';
import TitleBar from './titlebar/titlebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let socket = io('http://localhost:8080');
    socket.on('connected', data => {
      console.log(data);
    });
    socket.on('post', packets => {
      let newState = this.state;
      Object.keys(packets).forEach(device => {
        if(newState.packets[device])
          newState.packets[device].packets.concat(device.packets);
        else
          newState.packets[device] = packets[device];
      });
      console.log(newState)
      this.setState(newState);
    })
    this.setState({ ...this.state, socket: socket });
  }
  state = {
    packets: {},
    socket: null
  }
  render() {
    return (
      <div className={s.app}>
        <div className={s.devices}>
          <div className={s.title}>Devices</div>
          {
            Object.keys(this.state.packets).map((key,i) => {
              return(
                <Device
                  key={ i }
                  mac={ key }
                  org={ this.state.packets[key].org }
                  packets={ this.state.packets[key].packets }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;