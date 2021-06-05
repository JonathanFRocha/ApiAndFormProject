import React from "react";
import { getCatList } from "../services/api";

import "./TagCard.css";

class TagCard extends React.Component {
  constructor() {
    super();
    this.state = {
      ids: [],
      clicked: false,
    };
  }

  checkNeedForCollapse = (contentElement) => {
    const { clicked } = this.state;
    console.log(clicked);
    if (!clicked) {
      contentElement.style.maxHeight = null;
    } else {
      const contentSize = contentElement.scrollHeight;
      contentElement.style.maxHeight = `${contentSize}px`;
    }
  };

  handleTagClick = async (event) => {
    const contentElement = event.target.nextElementSibling;
    const hasId = this.state.ids.length > 0;
    const stateClicked = this.state.clicked;

    if (hasId) {
      this.setState({ clicked: !stateClicked }, () => {
        this.checkNeedForCollapse(contentElement);
      });
    } else {
      const { tag } = this.props;

      const res = await getCatList();
      const ids = res.filter(({ tags }) => tags.includes(tag)).map(({ id }) => id);

      this.setState({ ids, clicked: !stateClicked }, () => {
        this.checkNeedForCollapse(contentElement);
      });
    }
  };

  renderIds() {
    const { ids } = this.state;

    return ids.map((id) => {
      return <p key={id}>{id}</p>;
    });
  }

  render() {
    const { tag } = this.props;
    const renderedIds = this.renderIds();

    return (
      <div className="tagCard">
        <h3 className="tagCard__name" onClick={this.handleTagClick}>
          {tag}
        </h3>
        <div className="tagCard__content__container">{renderedIds}</div>
      </div>
    );
  }
}

export default TagCard;
