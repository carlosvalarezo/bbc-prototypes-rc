/**
 * Created by carlos-valarezo on 13/06/2016.
 */
var React = require('react');

var SharingButton = React.createClass({


    render:function()
    {
        console.log("Sharing url = " + this.props.urlStory);
        return <div onclick={"window.plugins.socialsharing.share(" + this.props.urlStory + ")"} >share</div>
    }

});

export default SharingButton;
