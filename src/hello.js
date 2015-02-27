define(['react', 'lodash', 'zepto', './hello.rt'], function (React, _, $, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',
        getInitialState: function () {
            return {data: null};
        },
        componentDidMount: function(){
            $.get('../exampleData.json', function(dependenciesData){
                this.setState({
                    data: JSON.parse(dependenciesData)
                });
            }.bind(this));
        },
        render: template
    });
});
