define(['react', 'lodash', 'zepto', './parentClass.rt'], function (React, _, $, template) {
    'use strict';

    return React.createClass({
        displayName: 'parentClass',
        getInitialState: function () {
            return {
                editorInit: false
            };
        },
        addEditorAPI: function(){
            this.editorAPI = {
                printComponent: function(){
                    console.log('editor comp from parent');
                }
            };
            this.setState({
                editorInit: true
            });
        },
        childContextTypes: {
            editorAPI: React.PropTypes.object.isRequired
        },
        getChildContext: function(){
            return {
                editorAPI: this.editorAPI || {}
            };
        },
        render: template
    });
});
