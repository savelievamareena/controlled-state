import React from "react";
import CheckBoxes from "../../CheckBoxes";
import {Data} from "../../Data";

type Props = {
    checkboxesData: Data[]
}

export default function Component1({checkboxesData}: Props) {

    return(
        <div>
            <CheckBoxes checkboxesData={checkboxesData} checked={[11, 33]}/>
        </div>
    )
}