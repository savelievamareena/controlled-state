import React from "react";
import CheckBoxes from "../CheckBoxes";
import {Data} from "../Data";

type Props = {
    checkboxesData: Data[]
}

export default function Component3({ checkboxesData }: Props) {
    const [checked, setChecked] = React.useState<number[]>([11]);

    function handleChange(id: number): void {
        let checkboxIndexToCheck: number = 0;
        for(let i = 0; i < checkboxesData.length; i++) {
            if(checkboxesData[i].id === id) {
                if(i + 1 === checkboxesData.length) {
                    checkboxIndexToCheck = checkboxesData[0].id;
                }else {
                    checkboxIndexToCheck = checkboxesData[i+1].id;
                }
            }
        }
        setChecked([checkboxIndexToCheck])
    }

    return(
        <div>
            <CheckBoxes checkboxesData={checkboxesData} customHandleChange={handleChange} checked={checked}/>
        </div>
    )
}