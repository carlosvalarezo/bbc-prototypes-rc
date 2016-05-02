/**
 * Created by carlos-valarezo on 27/04/2016.
 */
module.exports={
    entry:{app:['./js/app/SportsContainer.js']},
    output:
    {
        path: __dirname,
        filename: "bundle.js"
    },
    module:
    {
        loaders:[{test:/\.jsx?$/,loader:'babel'}]
    }
};

