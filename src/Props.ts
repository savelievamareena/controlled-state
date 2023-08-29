import {Data} from "./Data";

export default interface Props {
    checkboxesData: Data[],
    customHandleChange?: (clickedId: number) => void,
    checked?: number[]
}

