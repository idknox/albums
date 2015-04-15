(function(window) {

  var Album = React.createClass({
    propTypes: {
      album: React.PropTypes.object.isRequired
    },
    
    render: function() {
      return (
        <li className="album">
            {this.props.album.artist}
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
         window.AlbumAPI.get_albums().then(function (data) {
            console.log(data)
            //this.setState(data);
        });
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
