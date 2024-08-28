import { useCallback, useRef, useState } from 'react';
import '../styles/components/CollapsibleSection.css'
import ArrowIcon from '../assets/arrow.svg';
import useProperty from '../hooks/UseProperty';



export default function CollapsibleSection({title, content, additionalClasses='', defaultCollapse = true}) {
    const [collapsed, setCollapsed] = useProperty(defaultCollapse);
    setCollapsed(defaultCollapse);
    const parentWrapperClass = 'collapse-section-container'; 
    const wrapperRef = useRef(null); 

    

    const toggleCollpase = useCallback(() => {        
        setCollapsed(!collapsed);
        if(wrapperRef.current) {
            wrapperRef.current.classList.toggle('collapsed');
        }
    }, []);

    function Arrow() {
        return <img src={ArrowIcon} className={`collapse-section-toggle ${collapsed ? 'collapsed' : ''}`}/>;
    }

    return (
        <>
            <div ref={wrapperRef} className={`${parentWrapperClass} ${additionalClasses} ${collapsed ? 'collapsed' : ''}`}>
                 {/* Icon by icon king1 on freeicons.io https://freeicons.io/undefined/arrow-arrow%20down-down-drop-stroke%20arrow-icon-706 */}
                <h3 onClick={toggleCollpase} className="title">{title} <Arrow /></h3>
                <div className="collapse-content-wrapper">{content}</div>
            </div>
        </>
    );
}