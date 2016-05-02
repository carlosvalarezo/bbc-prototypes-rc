/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require ( 'react' );
import Image from './Image';

var Story = React.createClass ( {

    render: function () {

        /*var img = this.props.story.image;
         console.log("FOTO => ", img);
         var image = Object.keys(img).map((key) =>
         {
         return <Image src={img[key].href}
         altText={img[key].altText}
         originCode={img[key].originCode}/>
         });*/
        /*var items = this.props.story.items;
         var item = Object.keys(items).map((key) => console.log("h => ", items[key]))*/
        //console.log ( "story--- => " , this.props.story );
        var story = this.props.story.map((item) => {


            console.log ( "a -> " , item.media );
            return <article>
                <div className={"top__story__container"}>
                    <div className="top__story__title"><a
                        href={item.headline}>{item.headline} {item.headline}</a></div>
                    <div>{item.headline}</div>

                </div>
            </article>
        })
        return<div> {story} </div>;
    }
} );
export default Story;
