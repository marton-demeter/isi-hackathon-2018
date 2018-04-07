import React from 'react';
import s from './device.scss';
import Packet from './packet/packet.jsx';
import c from 'classnames';

class Device extends React.Component {
  handleClick = event => {
    console.log(this.state);
    this.setState({ expanded: !this.state.expanded });
  }
  state = {
    expanded: false
  }•≥
  render() {
    return (
      <div className={s.device} onClick={e => this.handleClick(e)}>
        <className={s.info}> 88
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
                  date={packet.date}
                  time={packet.time}
                  src_ip={packet.src_ip}
                  src_port={packet.srt_port}
                  dst_mac={packet.dst_mac}
                  dst_ip={packet.dst_ip}
                  dst_port={packet.dst_port}
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