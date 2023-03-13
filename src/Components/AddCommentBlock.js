import { Component } from 'react';
import classes from './AddCommentBlock.module.scss';

export default class AddCommentBlock extends Component {

  handleClick = (e) => {
    e.stopPropagation();
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.onSubmit({
        x: this.props.x,
        y: this.props.y,
        text: e.target.value,
      });
    }
  }

  render() {
    return (
      <div className={ classes['add-comment-block'] } style={ {
        left: this.props.x,
        top: this.props.y - 40,
      } }>

        <span className={ classes['blue-circle'] }></span>

        <div className={ classes['add-comment-block__input-block'] } onClick={ this.handleClick }>
          <div className={ classes['add-comment-block__input'] }>
            <input
              type="text"
              placeholder="Add a comment..."
              onClick={ this.handleClick }
              onKeyDown={ this.handleKeyDown }/>
          </div>
        </div>
      </div>

    )
  }
}
