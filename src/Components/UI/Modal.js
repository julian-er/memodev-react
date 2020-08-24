import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../hoc/auxiliar'
import Backdrop from './Backdrop'
import { Container} from 'reactstrap';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children ;
    }

    // componentWillUpdate(){
    //     console.log('modal will update')
    // }
    //thas no necesary it's only for check

    render() {
 

        return (
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.clicked}/>
            <div 
            className={classes.Modal}
            style={{
                transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                <Container>
                        {this.props.children} 
                </Container>
            </div>
        </Aux>
        )
    }
}
export default Modal



