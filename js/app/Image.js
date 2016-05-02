/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');

var Image = React.createClass({

    render: function()
    {
        var urlStart = "http://ichef.bbci.co.uk/onesport/cps/240/";
        var src = this.props.src;
        var url = urlStart + this.props.originCode + src.substr(src.indexOf('k')+1,src.length-1);
        return(<div className="img__top__story"><img src={url}/> </div>);

    }
});
export default Image;
