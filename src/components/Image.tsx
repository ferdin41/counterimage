import React, { useState } from 'react';
interface IState {
    showPicture : boolean
}

class Image extends React.Component<IState>{



    render(){return(
        <div>
            <a href="https://placeholder.com">
                <img src={this.props.showPicture ? "https://via.placeholder.com/150" : ""}  />
            </a>
            
        </div>
        
    
        )}}

export default Image;