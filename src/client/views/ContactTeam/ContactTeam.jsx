import React from 'react';
import ReactDOM from 'react-dom';
import GridFS from 'gridfs-stream';
import withStyles from '@material-ui/core/styles/withStyles';

import Message from './Message.js';
import ChatAppStyle from './ChatApp.css';

const styles = theme => ({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  }
});

class ContactTeam extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          chats: [{
              username: "Kevin Hsu",
              content: <p>Hello World!</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Alice Chen",
              content: <p>Love it! :heart:</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>Check out my Github</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "KevHs",
              content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
              img: "http://i.imgur.com/ARbQZix.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>So</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>You can sign-up now to try out our private beta!</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Alice Chen",
              content: <p>Definitely! Sounds great!</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }]
      };

      this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
      this.scrollToBot();
  }

  componentDidUpdate() {
      this.scrollToBot();
  }

  scrollToBot() {
      ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }

  submitMessage(e) {
      e.preventDefault();

      this.setState({
          chats: this.state.chats.concat([{
              username: "Kevin Hsu",
              content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }])
      }, () => {
          ReactDOM.findDOMNode(this.refs.msg).value = "";
      });
  }

  render() {
    const { classes } = this.props;
    const username = "Kevin Hsu";
    const { chats } = this.state;

    return (
      
        <div className="chatroom">
            <h3>Project Development Chat</h3>
            <ul className="chats" ref="chats">
              {
                chats.map((chat) => 
                <Message chat={chat} user={username} />
                )
              }
            </ul>
            <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                <input type="text" ref="msg" />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
      
      );
  }
}

export default withStyles(styles)(ContactTeam);
