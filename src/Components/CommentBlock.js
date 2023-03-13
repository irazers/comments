import { Component } from 'react';
import classes from './CommentBlock.module.scss';

export default class CommentBlock extends Component {
  render() {
    return (
      <div className={classes['comment-block']}>
        <h3>{ this.props.userName }</h3>
        <p>
          { this.props.comment }
        </p>
      </div>
    )
  }
}
