Router.configure({
    layoutTemplate: 'main'
});

Router.route("/", { 
    name: "home",
    template: "home"
})

Router.route("/software", { 
    name: "software",
    template: "software"
})

Router.route("/faq", { 
    name: "faq",
    template: "faq"
})

Router.route("/proposals", { 
    name: "proposals",
    template: "proposals"
})

Router.route("/members", { 
    name: "members",
    template: "members"
})


Router.route("/articlesOfFederation", {
    name: "articles",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "articles")
          Meteor.call('getPaper', "BUarticles", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})

Router.route("/feeMarket", {
    name: "feeMarketPaper",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "feemarket")
          Meteor.call('getPaper', "feemarket", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})

Router.route("/bitcoinWhitepaper", {
    name: "satoshiPaper",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "satoshi")
          Meteor.call('getPaper', "satoshi", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault("page", "home");

  Template.header.helpers({
  });

  Template.header.events({
      'click #home': function () {
          Session.set('page', "home") 
      },
      'click #proposals': function () {
          Session.set('page', "proposals") 
      },
      'click #software': function () {
          Session.set('page', "software") 
      },
      'click #members': function () {
          Session.set('page', "members") 
      }
  });

  Template.viewPaper.helpers({
    display: function()
      {
          console.log('display ');
          return Session.get("paperContents") || "paper is not uploaded";
      }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
      // code to run on server at startup
      //var fs = Npm.require("fs");
      Meteor.methods({
          getPaper: function(name) {
              console.log('on server, getPaper ', name);
              if (name == "satoshi")
              {
                  var data = Assets.getText("bitcoin.html"); //fs.readFileSync("bitcoin.htm");
                  return data;
              }
              if (name == "BUarticles")
              {
                  var data = Assets.getText("articles.html"); //fs.readFileSync("bitcoin.htm");
                  return data
              }
              if (name == "feemarket")
              {
                  var data = Assets.getText("feemarket.html"); //fs.readFileSync("bitcoin.htm");
                  return data
              }
              return "Unknown paper";

          },
      });
  });
}
