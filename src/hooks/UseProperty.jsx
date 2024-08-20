import { useRef } from "react";

/**
 * Custom hook to store and update mutable property, that should not re-render dom
 * @param {*} initial 
 * @returns 
 */
function useProperty(initial = null) {
    const prop = useRef(initial);
    const setPropValue = (newVal) => {
      prop.current = newVal;
    };
  
    return [prop.current, setPropValue];
}

export default useProperty