(function (window) {

    var Album = React.createClass({
        propTypes: {
            album: React.PropTypes.object.isRequired
        },

        displayAlbum: function () {
            React.render(<Album album={this.props.album}/>, document.getElementById('albumModalContent'))
        },

        render: function () {
            var album = this.props.album;
            var albumStyle = {
                backgroundImage: 'url(' + album.image_url + ')'
            };

            return (
                <div className="album" onClick={ this.displayAlbum } data-toggle="modal" data-target="#albumModal">
                    <div className="album-header">{ album.title }</div>
                    <div className="album-content" style={ albumStyle }>
                        <div className="ribbon">{ album.year }</div>
                    </div>
                    <div className="album-footer">{ album.artist }</div>
                </div>
            );
        }
    });

    var Albums = React.createClass({

        getInitialState: function () {
            return {
                albums: []
            }
        },

        componentDidMount: function () {
            window.AlbumAPI.get_albums().then(function (response) {
                this.setState(response);
            }.bind(this));
        },

        render: function () {
            return (
                <div className="albums">
                    <div className="row">
                        {
                            this.state.albums.map(function (album, i) {
                                return (
                                    <div className="col-sm-4 album-container" key= { i }>
                                        <Album album={ album } key={ i }/>
                                    </div>
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
