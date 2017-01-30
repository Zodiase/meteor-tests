import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// Import MDC components from the meteor package.
import { ripple } from 'meteor/zodiase:mdc';

import './template.html';

const tplName = "mdc_demo_fab",
      tplClass = Template[tplName];

tplClass.onCreated(function templateOnCreated() {
});

tplClass.onRendered(function templateOnRendered() {
  // Initialize all MDC components.
  this.$('.mdc-fab').each((index, element) => {
    ripple.MDCRipple.attachTo(element);
  });
});

tplClass.helpers({
});

tplClass.events({
});
