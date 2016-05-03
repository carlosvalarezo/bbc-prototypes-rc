/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require ( 'react' );
import MediaContainer from './MediaContainer';

var Story = React.createClass ( {

    render: function () {

        var story = this.props.story.map((item) => {
            console.log("id story = " + this.props.id)
            return(
                <article>
                    <a href={item.assetUri}>
                        <div>
                            <div className={this.props.id + "-title"}>
                                {item.headline} {item.title}
                            </div>
                            <div>
                                {item.summary}
                            </div>
                            <MediaContainer id={this.props.id} media={item.media} />
                        </div>
                    </a>
                </article>
            );
        })
        return( <div> {story} </div> );
    }
} );
export default Story;
