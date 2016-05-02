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
            return <Story story={story.items} key={story.title}/>
        });
        return(
             <div>
                 {stories}
            </div>
        );

    }
});

export default StoryContainer;
