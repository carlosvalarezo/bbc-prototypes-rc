/**
 * Created by carlos-valarezo on 02/05/2016.
 */
var React = require ( 'react' );
import Image from './Image';
import Video from './Video';

var MediaContainer = React.createClass({
    render:function()
    {
        var mediaType = Object.keys(this.props.media).map((key) =>
        {
            return (key === "images")
                ?
                <Image id={this.props.id} image={this.props.media[key]}/>
                :
                <Video id={this.props.id} video={this.props.media[key]}/>;
        });

        return(
            <div>
                {mediaType}
            </div>
        )
    }
});

export default MediaContainer;