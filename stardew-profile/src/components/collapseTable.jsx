import React, { useState } from 'react';
import './collapseTable.css';

const CollapsibleTable = ({ title, children, headerColor, contentColor  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const headerStyle = {
    backgroundColor: `rgb(${headerColor})`,
  };

  const contentStyle = {
    border: `1px solid rgb(${contentColor})`,
  };


  return (
    <div className="collapsible-table" style={contentStyle}>
      <div className="collapsible-header" style={headerStyle} onClick={toggleOpen}>
        <h3 className="table-header-title">{title}</h3>
        <span className="table-expand">[<a href="javascript:;">{isOpen ? 'Collapse' : 'Expand'}</a>]</span>
      </div>
      {isOpen && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleTable;
