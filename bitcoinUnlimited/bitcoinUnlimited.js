Router.configure({
    layoutTemplate: 'main'
});

Router.route("/", { 
    name: "home",
    template: "home"
})

Router.route("/software", { 
    name: "software",
    template: "software",
    onBeforeAction: function () {
          Meteor.call('getLinuxImages', "*", function(err, response) { Session.set('linuxImages', response); });
          this.next();
    }
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

  Template.software.helpers({
    linuxImages: function()
      {
          console.log('display ');
          return Session.get("linuxImages");
      }
  });



}

if (Meteor.isServer) {
  var fs = Npm.require('fs');
  
  var fail = function(response) {
  response.statusCode = 404;
  response.end();
  };

var dataFile = function() {
  console.log('feed file', this.params.id);
  // TODO write a function to translate the id into a file path -- but don't let any .. etc thru!
    var file = process.env.PWD + "/public/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz"; // fileFromId(this.params.id);

  // Attempt to read the file size
  var stat = null;
  try {
    stat = fs.statSync(file);
  } catch (_error) {
    console.log('file not found', file);
    return fail(this.response);
  }

  // The hard-coded attachment filename
  var attachmentFilename = 'filename-for-user.zip';

  // Set the headers
  this.response.writeHead(200, {
    'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=' + attachmentFilename,
    'Content-Length': stat.size
  });

  // Pipe the file contents to the response
  fs.createReadStream(file).pipe(this.response);
};

  Meteor.startup(function () {
      // code to run on server at startup
      //var fs = Npm.require("fs");
      Meteor.methods({
          //dataFile: function(id) { return dataFile(id); },
          getLinuxImages: function(name) {
              console.log('on server, getLinuxImages ', name);
              // http://stackoverflow.com/questions/29327993/how-to-list-files-in-folder
              return '64-bit: Version: 0.11.2, Dec 1, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz">bitcoinUnlimited-0.11.2-linux64.tar.gz</a><br/>32-bit: Version: 0.11.2, Dec 1, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux32.tar.gz">bitcoinUnlimited-0.11.2-linux32.tar.gz</a>';
          },
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

  Router.route('/download/:id', dataFile, {where: 'server'});
}
