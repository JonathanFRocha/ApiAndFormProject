import React from "react";
import TagCard from "../components/TagCard";
import { getTagList } from "../services/api";

import "./Cats.css";

class Cats extends React.Component {
  constructor() {
    super();
    this.state = {
      tagList: [],
    };
  }

  async componentDidMount() {
    const resTagList = await getTagList();

    this.setState({ tagList: resTagList });
  }

  renderTagList = () => {
    const { tagList } = this.state;

    return tagList.map((tag) => <TagCard key={tag} tag={tag} />);
  };

  render() {
    const { tagList } = this.state;

    if (!tagList.length) {
      return (
        <div className="main">
          <h1>Loading</h1>
        </div>
      );
    } else return <div className="main">{this.renderTagList()}</div>;
  }
}

export default Cats;
