/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var whatwg = require('whatwg-fetch');
var Router = require('react-router' ).Router;
var Route = require('react-router' ).Route;
var history = requiere('react-router').browserHistory;

import StoriesContainer from './StoriesContainer';
import FullStory from './FullStory';




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
            var story1 = responseData.results[0].groups[0].groups[0].groups[0].groups[0];
            var story2 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[0];
            var story3 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[1];
            var moreStories = responseData.results[0].groups[0].groups[0].groups[1].groups[0];
            var storiesListTemp = [story1,story2,story3,moreStories];
            this.setState({storiesList:storiesListTemp});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    render:function(){
        return (
            <div>
                <StoriesContainer storiesList={this.state.storiesList}/>
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={SportsContainer}>
            <Route path="/fullstory" component={FullStory}/>
        </Route>
    </Router>), document.getElementById("root"));
                                                 