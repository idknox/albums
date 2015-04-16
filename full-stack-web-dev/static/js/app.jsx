(function(window) {

  var Album = React.createClass({
    propTypes: {
      album: React.PropTypes.object.isRequired
    },

    render: function() {
      var album = this.props.album
      var albumStyle = {
          backgroundImage: 'url(' + album.image_url + ')'
      };

        return (
        <div className="col-sm-4 album">
            <div className="album-header">{album.title}</div>
            <div className="album-content" style={albumStyle}>{album.artist}</div>
            <div className="album-footer">{album.artist}</div>
        </div>
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
         window.AlbumAPI.get_albums().then(function (response) {
            this.setState(response);
        }.bind(this));
    },

    render: function() {
      return (
        <div className="albums">
          <div class="row">
            {
        this.state.albums.map(function(album, i) {
          return (
            <Album album={ album } key={ i } />
          )
        }.bind(this))
      }
          </div>
        </div>
      );
    }
  });

  var AlbumsFactory = React.createFactory(Albums);

  React.render(AlbumsFactory({}), document.getElementById('albums-container'));
})(window);
