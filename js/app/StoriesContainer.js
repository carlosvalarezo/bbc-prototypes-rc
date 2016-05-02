/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
import Story from './Story';

var StoriesContainer = React.createClass({
    propTypes :
    {
        storiesList:React.PropTypes.array
    },
    render:function()
    {
        var stories = this.props.storiesList.map((story) => {
            return <Story headline={story.headline} title={story.title} summary={story.summary} link={story.assetUri} image={story.media.images.index}/>
        });
        return(
            <div>
                {stories}
            </div>

        );

    }
});

export default StoriesContainer;