import React from "react";
import { getCatList } from "../../services/api";

import "./TagCard.css";

class TagCard extends React.Component {
  constructor() {
    super();
    this.state = {
      ids: [],
      clicked: false,
    };
  }

  // baseado no estado clicked é feito um calculo para expandir o card ou então deixar o tamanho como Null
  checkNeedForCollapse = (contentElement) => {
    const { clicked } = this.state;
    if (!clicked) {
      contentElement.style.maxHeight = null;
    } else {
      const contentSize = contentElement.scrollHeight;
      contentElement.style.maxHeight = `${contentSize}px`;
    }
  };
  // é feito uma chamada para a API, onde é então filtrado baseado na tag e então atualiza os ids deste componente.
  // caso já tenha sido feito uma chamada anterior, então não é feito uma nova chamada
  // após ambos os casos é atualizado o estado clicked e então é verificado se o elemento tem de expandir ou encolher quando clicado na tag.
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

  // renderiza os ids mas não aparece. Tudo depende da checkNeedForCollapse
  renderIds() {
    const { ids } = this.state;

    return ids.map((id) => {
      return (
        <li className="tagCard__content__listItem" key={id}>
          {id}
        </li>
      );
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
        <div className="tagCard__content__container">
          <ul className="tagCard__content_list">{renderedIds}</ul>
        </div>
      </div>
    );
  }
}

export default TagCard;
