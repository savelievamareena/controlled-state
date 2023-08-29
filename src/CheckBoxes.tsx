import React from "react";
import Props from "./Props";
import {Data} from "./Data";
import useCheck from "./useCheck";

export default function CheckBoxes({checkboxesData, customHandleChange, checked}: Props) {
    let useId = React.useId();
    const {checkedItems, calculatedHandleChange} =
        useCheck(checked, customHandleChange);

    let checkboxes = checkboxesData.map(function(checkbox: Data, i: number) {
        return(
            <div key={i}>
                <label htmlFor={useId + "-" + checkbox.id}>{checkbox.value}</label>
                <input
                    type="checkbox"
                    id={useId + "-" + checkbox.id}
                    checked={checkedItems.includes(checkbox.id)}
                    onChange={()=>{calculatedHandleChange(checkbox.id)}}
                />
            </div>
        )
    })

    return(
        <div>
            {checkboxes}
        </div>
    )
}