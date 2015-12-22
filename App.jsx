// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Photos collection and puts them on this.data.photos
  getMeteorData() {
    return {
      photos: Photos.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  renderPhotos() {
    // Get photos from this.data.photos
    return this.data.photos.map((photo) => {
      return <PhotoItem key={photo._id} photo={photo} />;
    });
  },

  handleSubmit(event) {
  event.preventDefault();

  // Find the text field via the React ref
  var text = React.findDOMNode(this.refs.textInput).value.trim();

  Photos.insert({
    text: text,
    createdAt: new Date() // current time
  });

  // Clear form
  React.findDOMNode(this.refs.textInput).value = "";
},


  render() {
    return (
      <div className="container">
        <header>
          <h1>Photo List</h1>

         <form className="new-photo" onSubmit={this.handleSubmit} >
           <input
             type="text"
             ref="textInput"
             placeholder="Type to add new photos" />
         </form>
        </header>

        <ul>
          {this.renderPhotos()}
        </ul>
      </div>
    );
  }
});
