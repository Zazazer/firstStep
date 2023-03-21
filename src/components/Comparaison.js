import { IPhoneList } from '../datas/IPhoneList'
import React from 'react';

const Comparaison = () => {

    const HTML = [
        {
            id: document.getElementById("select1"),
            label: ""
        },
        {
            id: document.getElementById("select2"),
            label: ""
        },
        {
            id: document.getElementById("prix1"),
            prix : "test"
        },
        {
            id: document.getElementById("prix2"),
            prix: "trop cher"
        }
    ]
        // lorsque l'event a lieu
        // la target associée à HTML 
        // prend comme valeur l'attribut de IPhoneList correspondant 

    const [value, setValue] = React.useState("1")

    function handleChange_one(event) {
        setValue_one(event.target.value)
        if(event.target == HTML[0].id){
            for(let i=0; i<{IPhoneList}.length; i++){
                if(IPhoneList[i].key == event.target.value){
                    HTML[2].prix = IPhoneList[i].prix
                    console.log(IPhoneList.prix)
                }
            }
        }            
    }   
    function handleChange_two(event){
        if(event.target == HTML[1].id){
            setValue_two(event.target.value)

        }
    }
    return (
        <>
        <form>
            <select id="select1" value={value_one} onChange={handleChange_one} >
                {IPhoneList.map((IPhoneList) => (
                    <option value={IPhoneList.key}>{IPhoneList.label}</option>     
                ))}
            </select>
            <select id="select2" value={value_two} onChange={handleChange_two}>
                {IPhoneList.map((IPhoneList) => (
                    <option value={IPhoneList.key}>{IPhoneList.label}</option>     
                ))}
            </select>

        </form>
        {/* <div>
            <div>Ici doit se trouver une image</div>
            <div>Ici doit se trouver une image</div>
            <div>Ici doit se trouver une image</div>
        </div> */}
        <div>
           <div id="prix1" >Avez-vous les sous ? {HTML[2].prix}</div> 
           <div id="prix2">Avez-vous les sous ? {HTML[3].prix}</div> 
           {/* <div>Avez-vous les sous ? {IPhoneList[2].prix}</div>  */}
        </div>
        <div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
            <div><div></div><div></div><div></div></div>
        </div>
        </>
    )
}

export default Comparaison