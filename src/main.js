requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.0.1/lodash.min',
        react: '//fb.me/react-with-addons-0.12.2',
        zepto: '//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min.js'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'},
        zepto: {exports: '$'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', './hello'], function (React, hello) {
    'use strict';
    React.render(React.createElement(hello), document.getElementById('container'));
});
