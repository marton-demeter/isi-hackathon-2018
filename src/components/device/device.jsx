import React from 'react';
import s from './device.scss';
import Packet from './packet/packet.jsx';
import c from 'classnames';

class Device extends React.Component {
  handleClick = event => {
    this.setState({ expanded: !this.state.expanded });
  }
  state = {
    expanded: false
  }
  render() {
    return (
      <div className={s.device} onClick={e => this.handleClick(e)}>
        <div className={s.info}>
          <div className={s.org}>
            { this.props.org || 'Device Org' }
          </div>
          <div className={s.mac}>
            { this.props.mac || 'MAC Address' }
          </div>
        </div>
        <div className={
          c(s.packets,this.state.expanded?null:s.hidden)
        }>
          {
            this.props.packets.map((packet,i) => {
              return(
                <Packet
                  key={i}
                  ids={packet.id}
                  date={packet.date}
                  time={packet.time}
                  src_ip={packet.source_ip}
                  src_port={packet.source_port}
                  dst_mac={packet.dest_mac}
                  dst_ip={packet.dest_ip}
                  dst_port={packet.dest_port}
                  protocol={packet.protocol}
                  good={packet.good_packet}
                  allow={packet.allowed}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devices
});

export default Device;