import './Menu.css'
import { IPhoneList } from '../datas/IPhoneList'
import React from 'react';

const Menu = () => {
    const [selectValue, setValue] = React.useState("0");
    function handleChange(event){
        setValue(event.target.value)
    }
    return(
    <>
    <div id="case">    
        <form>
            <select value={IPhoneList[selectValue].key} onChange={handleChange}>
                {IPhoneList.map((IPhoneList) => (
                    <option value={IPhoneList.key}>{IPhoneList.label}</option>
                ))}
            </select>
        </form>
        <div id="prix1"> Avez-vous les sous ? {IPhoneList[selectValue].prix}
        </div>
        </div>
            </> 
    )}

export default Menu