const cheerio = require('cheerio');

const axios = require('axios');

// const { parse, each, find } = require('abstract-syntax-tree');

async function main() {

    // get the page source
    const { data } = await axios.get(
        'https://www.noiseandgradient.com/?chaos=0&colors=%236cd4ff-%238b80f9-%23cfbff7-%23cfb1b7-%2383858c&grain=0'
    );

    // load the page source with cheerio to query the elements
    const $ = cheerio.load(data);

    // console.log($('.p5Canvas'))

    console.log($.root().html())

    // get the script tag that contains the string 'Chart.defaults'
    // const contents = $('script')
    //     .toArray()
    //     .map(script => $(script).html())
    //     .find(contents => contents.includes('Chart.defaults'));

    // // convert the script content to an AST
    // const ast = parse(contents);

    // // we'll put all declarations in this object
    // const declarations = {};

    // // current key
    // let key = null;

    // // iterate over all variable declarations inside a script
    // each(ast, 'VariableDeclaration', node => {

    //     // iterate over possible declarations, e.g. comma separated
    //     node.declarations.forEach(item => {

    //         // let's get the key to contain the values of the statistics and their labels
    //         // we'll use the ID of the canvas itself in this case..
    //         if(item.id.name === 'ctx') { // is this a canvas context variable?
    //             // get the only string literal that is not '2d'
    //             const literal = find(item, 'Literal').find(v => v.value !== '2d');
    //             if(literal) { // do we have non- '2d' string literals?
    //                 // then assign it as the current key
    //                 key = literal.value;
    //             }
    //         }

    //         // ensure that the variable we're getting is an array expression
    //         if(key && item.init && item.init.type === 'ArrayExpression') {

    //             // get the array expression
    //             const array = item.init.elements.map(v => v.value);

    //             // did we get the values from the statistics?
    //             if(declarations[key]) {

    //                 // zip the objects to associate keys and values properly
    //                 const result = {};
    //                 for(let index = 0; index < array.length; index++) {
    //                     result[array[index]] = declarations[key][index];
    //                 }
    //                 declarations[key] = result;

    //                 // let's make the key null again to avoid getting
    //                 // unnecessary array expression
    //                 key = null;

    //             } else {
    //                 // store the values
    //                 declarations[key] = array;
    //             }
    //         }

    //     });

    // });

    // // logging it here, it's up to you how you deal with the data itself
    // console.log(declarations);

}

main();