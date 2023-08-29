import React from "react";

export default function useCheck(checked: number[] | undefined, customHandleChange: ((clickedId: number) => void) | undefined) {
    const [checkedItems, setCheckedItems] =
        React.useState(checked ? checked : [])

    function handleChange(id: number) {
        if(checkedItems !== undefined && checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((checkedId)=> id !== checkedId))
        }else {
            setCheckedItems(prevState => [...prevState, id]);
        }
    }

    React.useEffect(function() {
        setCheckedItems(checked ? checked : [])
    }, [checked])

    function calculatedHandleChange(id: number) {
        if(customHandleChange) {
            customHandleChange(id);
        }else {
            handleChange(id);
        }
    }

    return {checkedItems, calculatedHandleChange};
}