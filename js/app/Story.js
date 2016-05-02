/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require ( 'react' );
import MediaContainer from './MediaContainer';

var Story = React.createClass ( {

    render: function () {

        var story = this.props.story.map((item) => {
            return(
                <article>
                    <div className={"top__story__container"}>
                            <div className="top__story__title">
                                <a href={item.headline}>{item.headline} {item.title}</a>
                            </div>
                            <div>{item.summary}</div>
                         <MediaContainer media={item.media} />
                    </div>
                </article>
            );
        })
        return<div> {story} </div>;
    }
} );
export default Story;
