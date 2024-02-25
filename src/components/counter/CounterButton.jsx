import {PropTypes} from 'prop-types'
import "./Counter.css"
export default function CounterButton({by, incrementFunction, decrementFunction}){
   
    // function incrementCounterFunction(){
    //     incrementFunction(by);
    //     console.log('increment clicked')
    // }
    // function decrimentCounterFunction(){
    //     decrementFunction(by);
    //     console.log('decriment clicked')
    // }



    return(
        <div className="Counter">
            <div>
                <button className="counterButton"
                    onClick={()=> incrementFunction(by)}
                >+{by}</button>

                <button className="counterButton"
                    onClick={()=> decrementFunction(by)}
                >-{by}</button>
            </div>
            
        </div>
    )
}

CounterButton.propTypess={
    by: PropTypes.number
}