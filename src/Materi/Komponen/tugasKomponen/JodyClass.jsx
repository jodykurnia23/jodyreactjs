import React from "react";
import PropTypes from 'prop-types';

class JodyClass extends React.Component {
    
    render(){
        return(
            <div>
                <center>
                    <h1>Hallo {this.props.nama}, Selamat datang di web Jody!</h1>
                </center>
            </div>
        )
    }
}

JodyClass.propTypes = {
    nama: PropTypes.string.isRequired
}

export default JodyClass; 