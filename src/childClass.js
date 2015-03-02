define(['react', 'lodash', './childClass.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'childClass',
        contextTypes: {
            editorAPI: React.PropTypes.object.isRequired
        },
        printComponent: function(){
            if (this.context.editorAPI.printComponent){
                this.context.editorAPI.printComponent();
            } else {
                console.log('child component');
            }

        },
        render: template
    });
});
