import React, { useState, Fragment } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedListItems = props.listItems.map((listItem, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <Fragment key={listItem.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {listItem.title}
        </div>
        <div className={`content ${active}`}>
          <p>{listItem.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedListItems}</div>;
};

export default Accordion;
