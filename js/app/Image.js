/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');

var Image = React.createClass({

    render: function()
    {
        var urlStart = "http://ichef.bbci.co.uk/onesport/cps/";

        var src = Object.keys(this.props.image.index).map((key) =>
        {
            let url = urlStart + ((this.props.id === "type-a-top-story-1") ? "480/" : "240/")
                +
                this.props.image.index[key].originCode
                +
                this.props.image.index[key].href.substr
                (
                    this.props.image.index[key].href.indexOf('k')+1,this.props.image.index[key].href.length-1
                );
            console.log(url);
            return <div className={this.props.id + "-img-container"}><img src={url}
                        alt={this.props.image.index[key].altText}/></div>;
        });
        return <div>{src}</div>

    }
});
export default Image;
