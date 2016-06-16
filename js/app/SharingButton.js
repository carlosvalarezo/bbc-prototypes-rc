/**
 *  *  * Created by carlos-valarezo on 13/06/2016.
 *   *   */
var React = require('react');

var SharingButton = React.createClass({
    handleClick:function(sharedUrl)
    {
        console.log("Hola ---> " + sharedUrl);
        /*window.plugins.socialsharing.share('http://www.bbc.co.uk' + sharedUrl);*/
    },
    render:function()
    {
        let address = this.props.shareLink;
        let sharingButton = (
            <div>
                <button onClick={function() {window.plugins.socialsharing.share('http://www.bbc.co.uk' + address)}}>
                    share!
                </button>
            </div>
        );

        return <div>{sharingButton}</div>

    }

});

export default SharingButton;