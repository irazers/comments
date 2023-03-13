import { Component } from 'react';

import classes from './CommentTag.module.scss';
import Avatar from './Avatar';
import CommentBlock from './CommentBlock';

export default class CommentTag extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  handleClick = (e) => {
    e.stopPropagation();

    console.log('click');
  }

  render() {
    return (
      <div
        className={ classes.tag }
        onClick={ this.handleClick }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
        style={ {
          left: this.props.x,
          top: this.props.y - 40,
        } }
      >
        <Avatar email={ this.props.user } radius={ 30 }/>
        {
          this.state.isHovered &&
          <div className={ classes.comment }>
            <CommentBlock userName={ this.props.user } comment={ this.props.comments[0]?.text }/>
          </div>
        }

      </div>
    )
  }
}
