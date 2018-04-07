import React from 'react';
import s from './packet.scss';

class Packet extends React.Component {
  handleClick = event => {
    event.stopPropagation();
  }
  render() {
    return (
      <div className={s.packet} onClick={e => this.handleClick(e)}>
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
      </div>
    );
  }
}

export default Packet;