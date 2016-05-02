/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
import StoryContainer from './StoryContainer';

var StoriesContainer = React.createClass({
    render:function()
    {

        return(
            <div className="">

                <StoryContainer id="type-a-top-story-1"
                    stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-top-story-1")
                    }
                />
                <StoryContainer id="type-a-story-1"
                    stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-story-1")
                    }
                />
                <StoryContainer id="type-a-headline-list-1"
                                stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-headline-list-1")
                    }
                />

            </div>

        );

    }
});

export default StoriesContainer;