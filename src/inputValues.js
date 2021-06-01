// import { changeStateArray } from "./arrayCreator"

export const DisplayInputValues = (props) => {
    return (
        <ul className="values-list">
            <p className="value">{props.name}</p>
            <p className="value">{props.address}</p>
            <p className="value">{props.homePhone}</p>
            <p className="value">{props.mobilePhone}</p>
        </ul>
    )
}


//Im attempting to automate this more like below but can not get it to work.

// export const DisplayInputValues = (props) => {
//     return (
        
//         <ul className="values-list">
//             {changeStateArray.map((entry) => (
//                 <p className="value" key={`value-${entry}`}>{props.entry}</p>
//             ))}
//         </ul>
//     );
// }
