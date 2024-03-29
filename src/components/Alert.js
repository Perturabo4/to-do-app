import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import AlertContext from '../context/alert/alertContext';


const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={750}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show" role="alert"`}>
                {alert.text}
                <button 
                    onClick={hide}
                    type="button" 
                    className="close" 
                    data-dismiss="alert" 
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
        
    )
}

export default Alert