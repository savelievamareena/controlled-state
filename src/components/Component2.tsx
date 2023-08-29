import React from "react";
import CheckBoxes from "../CheckBoxes";
import {Data} from "../Data"

type Props = {
    checkboxesData: Data[]
}

export default function Component2({checkboxesData}: Props) {
    const [checked, setChecked] = React.useState<number[]>([33]);
    console.log("rendering Component2", checked)

    function customHandleChange(id: number): void {
        if(!checked.includes(id)) {
            console.log('setting checked: ', [id])
            setChecked([id]);
        }
    }

    return(
        <div>
            <CheckBoxes checkboxesData={checkboxesData} customHandleChange={customHandleChange} checked={checked}/>
        </div>
    )
}