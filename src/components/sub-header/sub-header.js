import React, { Component } from "react"
import { withTranslation } from "../../hoc"
import "./sub-header.scss"
import { Link } from "react-router-dom"

class SubHeader extends Component {
  changeStyle = category => {
    const { categories } = this.props;
    const [gallery, order, teaching] = categories;
    switch (category) {
      case gallery:
        return violetStyle;
      case order:
        return pinkStyle;
      case teaching:
        return blueStyle;
      default:
        return null
    }
  };
  render() {
    const { subHeader } = this.props.t;
    const { currentCategory, categories } = this.props;
    return (
      <div className="sub-header-body">
        {categories.map(route => {
          const categoryColor = this.changeStyle(currentCategory);
          return (
            <div className={`sub-category`} key={route}>
              <Link
                to={`${route}`}
                style={`${route}` === currentCategory ? categoryColor : null}
              >
                {subHeader[route.slice(1)]}
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default withTranslation(SubHeader)

const violetStyle = {
  color: "rgb(113, 60, 205)",
  borderBottom: "1px solid rgb(113, 60, 205)"
};
const pinkStyle = {
  color: "rgb(254, 164, 165)",
  borderBottom: "1px solid rgb(254, 164, 165)"
};

const blueStyle = {
  color: "rgb(89, 228, 255)",
  borderBottom: "1px solid rgb(89, 228, 255)"
};
