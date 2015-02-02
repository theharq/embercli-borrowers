import {moduleForModel,test} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Friend', {
  needs: ['model:article']
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
});

test('fullName joins first and last name', function() {
  var model = this.subject({firstName: 'Hilde', lastName: 'Rueda'})

  equal(model.get('fullName'), 'Hilde Rueda')

  Ember.run(function() {
    model.set('firstName', 'Brando');
  });

  equal(model.get('fullName'), 'Brando Rueda', 'Updates fullName');
});

test('articles relationship', function() {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');
  equal(relationship.key, 'articles');
  equal(relationship.kind, 'hasMany');
});

