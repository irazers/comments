import './App.module.scss';
import CommentTag from './Components/CommentTag';
import { Component } from 'react';
import classes from './App.module.scss';
import AddCommentBlock from './Components/AddCommentBlock';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addComment: false,
      comments: []
    }
  }

  handleClickOutside = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        addComment: {
          position: {
            x: event.clientX,
            y: event.clientY,
          }
        },
      }
    });
  }

  handleSubmit = (comment) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        comments: [
          ...prevState.comments,
          {
            id: Date.now(),
            user: 'test@test.com',
            position: {
              x: comment.x,
              y: comment.y,
            },
            comments: [
              {
                user: 'test@test.com',
                text: comment.text
              }
            ],
          }
        ],
        addComment: false,
      }
    });
  }

  render() {
    return (
      <div className={ classes.app } onClick={ this.handleClickOutside }>
        {
          this.state.comments.map((comment) => {
            return (
              <CommentTag
                key={ comment.id }
                x={ comment.position.x }
                y={ comment.position.y }
                user={ comment.user }
                comments={ comment.comments }
              />
            )
          })
        }
        {
          this.state.addComment &&
          <AddCommentBlock
            x={ this.state.addComment.position.x }
            y={ this.state.addComment.position.y }
            onSubmit={ this.handleSubmit }
          />
        }
      </div>
    );
  }
}
