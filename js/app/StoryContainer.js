/**
 * Created by carlos-valarezo on 02/05/2016.
 */
var React = require('react');
import Story from './Story';

var StoryContainer = React.createClass({



    render:function()
    {
        var stories = this.props.stories.map((story) =>
        {
            return <Story story={story.items}/>
        });
        return(
            <div>
            <div>{this.props.id}</div>

        <div>{stories}
            </div>
                </div>
        );

    }
});

export default StoryContainer;
