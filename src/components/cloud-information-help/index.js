import React from 'react';

import './style.css';

const CloudInformationHelp = (props) => { 
    return (
        <div 
            className="cloud-help"
            style={props.styleCloud}
        >
          {props.text}
          <div 
            className="cloud-help-indicator"
            style={props.styleIndicator}
            />
        </div>
    )
}

export default CloudInformationHelp;
