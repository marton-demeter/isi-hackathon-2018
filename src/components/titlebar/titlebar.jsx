import React from 'react';
import s from './titlebar.scss';

class TitleBar extends React.Component {
  render() {
    return(
      <div className={s.titlebar}>
        <div className={s.num}>
          { this.props.num }
        </div>
        <div className={s.allowed}>
          { this.props.allowed || '???' }
        </div>
        <div className={s.blocked}>
          { this.props.blocked || '???' }
        </div>
      </div>
    );
  }
}

export default TitleBar;