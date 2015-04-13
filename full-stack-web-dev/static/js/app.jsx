(function(window) {

  var Album = React.createClass({
    propTypes: {
      album: React.PropTypes.object.isRequired
    },
    
    render: function() {
      return (
        <li className="album">
          // TODO: Add display logic to show album info
        </li>
      );
    }
  });

  var Albums = React.createClass({

    getInitialState: function() {
      return {
        albums: []
      }
    },

    componentDidMount: function() {
      // TODO: Use the api.js file to get all the available albums here and update the component
    },
    
    render: function() {
      return (
        <ul className="albums">
        {
        this.state.albums.map(function(album, i) {
          return (
            <Album album={ album } key={ i } />
          )
        }.bind(this))
      }
        </ul>
      );
    }
  });

  var AlbumsFactory = React.createFactory(Albums);

  React.render(AlbumsFactory({}), document.getElementById('albums-container'));
})(window);
