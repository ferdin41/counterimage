import * as React from 'react';


interface IProps {
    nama : string
    kelas : string
    isMorning : boolean
}

class Identity extends React.Component<IProps>{
    render(){return(
    <div>
        <h2>Nama : {this.props.nama}</h2>
        <h2>Kelas : {this.props.kelas}</h2>
        <h2>isMorning : {this.props.isMorning.toString()}</h2>
    </div>
    

    )}}

export default Identity;