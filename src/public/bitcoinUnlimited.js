Router.configure({
    layoutTemplate: 'main'
});

Router.route("/", { 
    name: "home",
    template: "home",
    onBeforeAction: function () {
    Session.set('varMenu', "");
    this.next();
    }
})

Router.route("/software", { 
    name: "software",
    template: "software",
    onBeforeAction: function () {
          Meteor.call('getOfficialLinuxImages', "*", function(err, response) { Session.set('officialLinuxImages', response); });
          Meteor.call('getExpLinuxImages', "*", function(err, response) { Session.set('expLinuxImages', response); });
          Meteor.call('getOfficialWindowsImages', "*", function(err, response) { Session.set('officialWindowsImages', response); });
          Meteor.call('getExpWindowsImages', "*", function(err, response) { Session.set('expWindowsImages', response); });
          Session.set('varMenu', "");
          this.next();
    }
})

Router.route("/faq", { 
    name: "faq",
    template: "faq",
    BeforeAction: function () {
    Session.set('varMenu', "");
    this.next();
    }
})

Router.route("/proposals", { 
    name: "proposals",
    template: "proposals",
    BeforeAction: function () {
    Session.set('varMenu', "");
    this.next();
    }
})

Router.route("/members", { 
    name: "members",
    template: "members",
    BeforeAction: function () {
    Session.set('varMenu', "");
    this.next();
    }
})


Router.route("/articlesOfFederation", {
    name: "articles",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "articles")
          Session.set("varMenu","<a href='/downloads/BUarticles.pdf'>Download PDF</a>");
          Meteor.call('getPaper', "BUarticles", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})

Router.route("/feeMarket", {
    name: "feeMarketPaper",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "feemarket")
          Session.set("varMenu","<a href='/downloads/feemarket.pdf'>Download PDF</a>");
          Meteor.call('getPaper', "feemarket", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})

Router.route("/bitcoinWhitepaper", {
    name: "satoshiPaper",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "satoshi")
          Session.set("varMenu","<a href='/downloads/bitcoin.pdf'>Download PDF</a>");
          Meteor.call('getPaper', "satoshi", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})

Router.route("/1txn", {
    name: "onetxnPaper",
    template: "viewPaper",
    onBeforeAction: function () {
          Session.set('paper', "onetxnPaper")
          Session.set("varMenu","<a href='/downloads/btc_1txn.pdf'>Download PDF</a>");
          Meteor.call('getPaper', "onetxnPaper", function(err, response) { Session.set('paperContents', response); });
          this.next();
    }
})


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("page", "home");

  Template.header.helpers({
    alert: function()
      {
          return Session.get("alert");
      },
    varMenu: function()
      {
          return Session.get("varMenu");
      }
  });

  Template.header.events({
  });

  Template.viewPaper.helpers({
    display: function()
      {
          console.log('display ');
          return Session.get("paperContents") || "paper is not uploaded";
      }
  });

  Template.software.helpers({
    showSignatures: function()
      {
          return Session.get("showSignatures");;
      },
    expLinuxImages: function()
      {
          return Session.get("expLinuxImages");
      },
    officialLinuxImages: function()
      {
          return Session.get("officialLinuxImages");
      },
    expWindowsImages: function()
      {
          return Session.get("expWindowsImages");
      },
    officialWindowsImages: function()
      {
          return Session.get("officialWindowsImages");
      }
  });

  Template.software.events({
    'click #sigOfficial112': function(){
    Session.set("showSignatures", true)
},
    'click #close': function(){
    Session.set("showSignatures", false)
}
  });


}

if (Meteor.isServer) {
  var fs = Npm.require('fs');
  
  var fail = function(response) {
  response.statusCode = 404;
  response.end();
  };

var fileFromId = function(fname) {
  var n = fname.search("/");
  if (n == -1) return ("");
  return fname;
  };

var dataFile = function() {
  console.log('feed file', this.params.id);
  // TODO write a function to translate the id into a file path -- but don't let any .. etc thru!
  //  var file = process.env.PWD + "/public/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz"; // fileFromId(this.params.id);
  var file = fileFromId(this.params.id);

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
          getExpLinuxImages: function(name) {
              console.log('on server, getExpLinuxImages ', name);
              // http://stackoverflow.com/questions/29327993/how-to-list-files-in-folder
              return 'Nothing right now'; // 64-bit: Version: 0.11.2, Dec 1, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz">bitcoinUnlimited-0.11.2-linux64.tar.gz</a><br/>32-bit: Version: 0.11.2, Dec 1, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux32.tar.gz">bitcoinUnlimited-0.11.2-linux32.tar.gz</a>';
          },
          getOfficialLinuxImages: function(name) {
              console.log('on server, getOfficialLinuxImages ', name);
              // http://stackoverflow.com/questions/29327993/how-to-list-files-in-folder
              return '64-bit: Version: 0.11.2, Dec 22, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz">bitcoinUnlimited-0.11.2-linux64.tar.gz</a><br/>32-bit: Version: 0.11.2, Dec 22, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux32.tar.gz">bitcoinUnlimited-0.11.2-linux32.tar.gz</a>';
          },
          getExpWindowsImages: function(name) {
              console.log('on server, getExpLinuxImages ', name);
              // http://stackoverflow.com/questions/29327993/how-to-list-files-in-folder
              return 'Nothing right now'; // 64-bit: Version: 0.11.2, Dec 1, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz">bitcoinUnlimited-0.11.2-linux64.tar.gz</a><br/>32-bit: Version: 0.11.2, Dec 1, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-linux32.tar.gz">bitcoinUnlimited-0.11.2-linux32.tar.gz</a>';
          },
          getOfficialWindowsImages: function(name) {
              console.log('on server, getOfficialLinuxImages ', name);
              // http://stackoverflow.com/questions/29327993/how-to-list-files-in-folder
              return '64-bit: Version: 0.11.2, Dec 22, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-win64-setup.exe">bitcoinUnlimited-0.11.2-win64-setup.exe</a> (<a href="/downloads/bitcoinUnlimited-0.11.2-win64.zip">zip</a>)<br/>32-bit: Version: 0.11.2, Dec 22, 2015: <a href="/downloads/bitcoinUnlimited-0.11.2-win32-setup.exe">bitcoinUnlimited-0.11.2-win32-setup.exe</a> (<a href="/downloads/bitcoinUnlimited-0.11.2-win32.zip">zip</a>)';
          },
           getPaper: function(name) {
              console.log('on server, getPaper ', name);
              if (name == "satoshi")
              {
                  var data = Assets.getText("bitcoin.html"); //fs.readFileSync("bitcoin.htm");
                  return data;
              }
              if (name == "onetxnPaper")
              {
                  var data = Assets.getText("btc_1txn.html"); //fs.readFileSync("bitcoin.htm");
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
