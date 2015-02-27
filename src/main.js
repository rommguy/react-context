requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.0.1/lodash.min',
        react: 'http://fb.me/react-with-addons-0.12.2',
        zepto: 'http://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min'
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
