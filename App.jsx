// App component - represents the whole app
App = React.createClass({
  getPhotos() {
    return [
      { _id: 1, caption: "This is photo 1" },
      { _id: 2, caption: "This is photo 2" },
      { _id: 3, caption: "This is photo 3" }
    ];
  },

  renderPhotos() {
    return this.getPhotos().map((photo) => {
      return <PhotoItem key={photo._id} photo={photo} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Photo List</h1>
        </header>

        <ul>
          {this.renderPhotos()}
        </ul>
      </div>
    );
  }
});
