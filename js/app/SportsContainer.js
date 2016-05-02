/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var whatwg = require('whatwg-fetch');
import StoriesContainer from './StoriesContainer';

var SportsContainer = React.createClass({
    getInitialState:function()
    {
        return {storiesList:[]}
    },
    componentDidMount: function()
    {
        fetch('./db/football28040255.json')
            .then((response) => response.json())
            .then((responseData) => {
            var story1 = responseData.results[0].groups[0].groups[0].groups[0].groups[0].items[0];
            var story2 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[0].items[0];
            var story3 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[1].items[0];
            var story4 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[0];
            var story5 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[1];
            var story6 =  responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[2];
            var story7 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[3];
            var story8 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[4];
            var story9 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[5];
            var story10 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[6];
            var story11 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[7];
            var story12 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[8];
            var story13 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[9];
            var story14 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[10];
            var story15 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[11];
            var story16 = responseData.results[0].groups[0].groups[0].groups[1].groups[0].items[12];
            var storiesListTemp = [story1,story2,story3,story4,story5,story6,story7,story8,
                story9,story10,story11,story12,story13,story14,story15,story16];
            this.setState({storiesList:storiesListTemp});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })

    },

    render:function(){
        return (
            <StoriesContainer storiesList={this.state.storiesList}/>
        );
    }
});

ReactDOM.render(<SportsContainer />, document.getElementById("root"));