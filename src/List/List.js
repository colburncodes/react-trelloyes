import React from "react";
import Card from "../Card/Card.js";
import "../List/List.css";

class List extends React.Component {
  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h3>{this.props.header}</h3>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </section>
    );
  }
}

export default List;
