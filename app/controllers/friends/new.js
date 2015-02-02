import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      console.log("save");
    },
    cancel: function(){
      console.log("cancel");
    }
  }
});
