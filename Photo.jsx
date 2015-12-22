// Photo component - represents a single todo item
Photo = React.createClass({
  propTypes: {
    // This component gets the photo to display through a React prop.
    // We can use propTypes to indicate it is required
    photo: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.photo.text}</li>
    );
  }
});
