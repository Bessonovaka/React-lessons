import React, {useState, useEffect} from 'react';


function LifecycleFunc() {

    const [s1, setS1] = useState(0);

    const buttonHandler = () => {
        let val = s1;
        val++;
        setS1(val);
    }

    useEffect(() => {
        console.log('effect');
    });

    return(
        <>
            <div>
                <button onClick = {buttonHandler}>
                    Push
                </button>
            </div>
            <div>
                {s1}
            </div>  
        </>
    )
}

export default LifecycleFunc;