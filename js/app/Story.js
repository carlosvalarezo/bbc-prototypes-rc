/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
import Image from './Image';

var Story = React.createClass({

    render:function()
    {
        var img = this.props.image;
        var image = Object.keys(img).map((key) =>
        {
            return <Image src={img[key].href}
                          altText={img[key].altText}
                          originCode={img[key].originCode}/>
        });
        return(
                <article>
                    <div className={"top__story__container"}>
                        <div className="top__story__title"><a href={this.props.link}>{this.props.headline} {this.props.title}</a></div>
                        <div>{this.props.summary}</div>
                        <div><a href={this.props.link}>{image}</a></div>
                    </div>
                </article>
        );
    }
});
export default Story;
