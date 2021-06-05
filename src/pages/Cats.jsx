import React from "react";
import TagCard from "../components/Cats/TagCard";
import { getTagList } from "../services/api";

import "./Cats.css";
import loadingImage from "../assets/images/loading.svg";

class Cats extends React.Component {
  constructor() {
    super();
    this.state = {
      tagList: [],
    };
  }

  // quando o componente é montado, é feito uma chamada para a api que vai retornar as tags e então atualiza o state
  async componentDidMount() {
    const resTagList = await getTagList();

    this.setState({ tagList: resTagList });
  }

  //   Renderiza as tags baseadas na taglist
  renderTagList = () => {
    const { tagList } = this.state;

    return tagList.map((tag) => <TagCard key={tag} tag={tag} />);
  };

  render() {
    const { tagList } = this.state;

    if (!tagList.length) {
      return (
        <div className="main">
          <img src={loadingImage} alt="spinning loading" />
        </div>
      );
    } else return <div className="main">{this.renderTagList()}</div>;
  }
}

export default Cats;
