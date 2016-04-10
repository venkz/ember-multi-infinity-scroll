import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    commonAction() {
      this.send('commonRouteAction');
    }
  }
});
