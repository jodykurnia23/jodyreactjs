import { useState } from "react";

const JodyFunctional = ({nilaiMinimal, nilaiMaksimal}) => {
    const [value, setValue] = useState(0);
    const handlePlus = () => {
        if(value < 10){
            setValue(value + 1)
        }
    }

    const handleMinus = () => {
        if(value > 0) {
            setValue(value - 1)
        }
    }
    return(
        <div>
            <center>
                <h2>Silahkan Beri Nilai {nilaiMinimal} - {nilaiMaksimal}</h2>
                <button onClick={handleMinus}> - </button>
                <span>{' '}{value}{' '}</span>
                <button onClick={handlePlus}> + </button>
                <br /> <br />
                <input type="submit" value="Kirim Nilai"></input>
            </center>
        </div>
    )
}


JodyFunctional.defaultProps = {
    nilaiMinimal: '1',
    nilaiMaksimal: '10'
}
export default JodyFunctional;