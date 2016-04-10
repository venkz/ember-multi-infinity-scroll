import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    return this.infinityModel("user", { perPage: 50, startingPage: 1 });
  },

  actions: {
    commonRouteAction() {
      console.log("This is CHILD reporting");
    }
  }
});
