/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');

var Image = React.createClass({

    render: function()
    {
        var urlStart = "http://ichef.bbci.co.uk/onesport/cps/240/";

        var src = Object.keys(this.props.image.index).map((key) =>
        {
            let url = urlStart + this.props.image.index[key].originCode + this.props.image.index[key].href.substr(this.props.image.index[key].href.indexOf('k')+1,this.props.image.index[key].href.length-1);
            return <img src={url}
                        alt={this.props.image.index[key].altText}/>;
        });
        return <div>{src}</div>

    }
});
export default Image;
