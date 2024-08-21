import { useState } from 'react';
import ArrowIcon from '../assets/arrow.svg';

function CollapsibleSection({title, content, defaultCollapse}) {
    const [collapsed, setCollapsed] = useState(typeof defaultCollapse !== 'undefined' ? defaultCollapse : true);
    
    function toggleCollpase() {
        setCollapsed(!collapsed);
    }

    function Arrow() {
        return <img onClick={toggleCollpase} src={ArrowIcon} className={`xp-section-toggle ${collapsed ? 'collapsed' : ''}`}/>;
    }

    return (
        <>
            <div className={`career-section-container  ${collapsed ? 'collapsed' : ''}`}>
                 {/* Icon by icon king1 on freeicons.io https://freeicons.io/undefined/arrow-arrow%20down-down-drop-stroke%20arrow-icon-706 */}
                <h3 className="job-title-section">{title} <Arrow /></h3>
                <div className="xp-wrapper">{content}</div>
            </div>
        </>
    );
}

export default CollapsibleSection