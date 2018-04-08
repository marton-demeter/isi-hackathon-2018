import React from 'react';
import s from './packet.scss';
import c from 'classnames';
import axios from 'axios';

class Packet extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = (event,num) => {
    event.stopPropagation();
    if(num !== undefined && num !== this.state.allow) {
      let status = { ids: this.state.ids, allow: num };
      console.log(status);
      // send status of modified configuration
      // axios.post({})
    }
    if(num === 1)
      this.setState({ allow: 1 });
    else if(num === 0) 
      this.setState({ allow: 0 });
  }
  state = {
    allow: this.props.good,
    ids: this.props.ids
  }
  render() {
    return (
      <div 
        className={c(s.packet,this.state.allow?s.allow:s.block,s['flip-3d'])}
        onClick={e => this.handleClick(e)}
        >
        <table>
          <tbody>
            <tr>
              <th>Date: </th>
              <td> { this.props.date }</td>
              <th>Destination MAC Address: </th>
              <td> { this.props.dst_mac }</td>
            </tr>
            <tr>
              <th>Time: </th>
              <td> { this.props.time }</td>
              <th>Destination IP Address: </th>
              <td> { this.props.dst_ip }</td>
            </tr>
            <tr>
              <th>Source MAC Addreess: </th>
              <td> { this.props.src_mac }</td>
              <th>Destination Port: </th>
              <td> { this.props.dst_port }</td>
            </tr>
            <tr>
              <th>Source IP Address: </th>
              <td> { this.props.src_ip }</td>
              <th>Protocol: </th>
              <td> { this.props.protocol }</td>
            </tr>
            <tr>
              <th>Source Port: </th>
              <td> { this.props.src_port }</td>
              <th>Good: </th>
              <td> { this.props.good }</td>
            </tr>
          </tbody>
        </table>
        <div className={s.buttons}>
          <div className={s.a} onClick={e => this.handleClick(e,1)}>
            <i className={c(s.fa,s['fa-check'])} />
          </div>
          <div className={s.reject} onClick={e => this.handleClick(e,0)}>
            <i className={c(s.fa,s['fa-times'])} />
          </div>
        </div>
      </div>
    );
  }
}

export default Packet;