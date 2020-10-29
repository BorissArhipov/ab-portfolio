import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { coContactReducerProps } from '../../types/types';
import { contactReducerProps } from '../../types/types';

import './infoBox.css';

interface InfoBoxProps {
    coContactReducer: contactReducerProps
}

class InfoBox extends Component<InfoBoxProps> {


    render() {
        const { message, color } = this.props.coContactReducer;
        let active: string;
        if(message === null) {
            active = 'infobox'
        } else {
            active = 'infobox infobox-active'
        }
        return (
            <div className={active} style={{backgroundColor: color}}>
                {message}
            </div>
        );    
    }    
}
  
function mapStateToProps( {coContactReducer}: coContactReducerProps) {
    return {
        coContactReducer
    }
}


export default connect(mapStateToProps)(InfoBox);