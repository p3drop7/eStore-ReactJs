import React from 'react'

function InputKeyDown() {

    function handler(e){

        if((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 8){
            console.log(e.target.value)
        }else{
            e.preventDefault()
        }
    }

    return (
        <div>
            <input type="text" onKeyDown={handler} />
        </div>
    )
}

export default InputKeyDown
