let express = require('express');
let router = express.Router();

/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
    res.render('home/index', {
       title: 'Home',
       displayName: req.user ? req.user.displayName : ""
       });
  };
  
  /* GET about page. */
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('home/about', { 
      title: 'About Me',
      displayName: req.user ? req.user.displayName : ""
     });
  };
  
  /* GET projects page. */
  module.exports.displayProjectPage = (req, res, next) => {
    res.render('home/project', {
       title: 'Projects',
       displayName: req.user ? req.user.displayName : ""
       });
  };
  
  /* GET services page. */
  module.exports.displayServicePage = (req, res, next) => {
    res.render('home/service', {
       title: 'Services',
       displayName: req.user ? req.user.displayName : ""
       });
  };
  
  /* GET contact page. */
  module.exports.displayContactPage = (req, res, next) => {
    res.render('contacts/index', {
       title: 'Contact',
       displayName: req.user ? req.user.displayName : ""
       });
  };
  
  
  /* get contact information using POST method. */
  module.exports.displayContactInfoPage = (req, res, next) => {
    //console.log(req.body);
  
    /** Holds values that user input */
    let contactInfo = {
      "firstName" : req.body.firstName,
      "lastName": req.body.lastName,
      "contactNumber": req.body.contactNumber,
      "email": req.body.email,
      "message": req.body.message
    };
  
    res.render('contacts/contactinfo', { 
      title: "Contact Information", 
      contactInfo: contactInfo,
      displayName: req.user ? req.user.displayName : ""
    });
    
  };




  module.exports.displayLoginPage = (req, res, next) => {
    // check if user is already logged in
    if (!req.user) {
      res.render("auth/login", {
        title: "Login",
        messages: req.flash("loginMessage"),
        displayName: req.user ? req.user.displayName : ""
      });
    } else {
      return res.redirect("/");
    }
  };
  
  module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
      // server error?
      if(err) {
        return next(err);
      }
      // is there a user login error?
      if(!user) {
        req.flash("loginMessage", "Authentication Error");
        return res.redirect('/login');
      }
      req.logIn(user, (err) => {
        // server error?
        if(err) {
          return next(err);
        }
        return res.redirect('/project-list');
      });
    })(req, res, next);
  };
  
  module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.user) {
      res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : ""
      });
    } else {
      return res.redirect("/");
    }
  };
  
  module.exports.processRegisterPage = (req, res, next) => {
    // define a new user object
    let newUser = new User({
      username: req.body.username,
      //password: req.body.password
      email: req.body.email,
      displayName: req.body.displayName
    });
  
    User.register(newUser, req.body.password, (err) => {
      if (err) {
        console.log("Error: Inserting New User");
        if (err.name == "UserExistsError") {
          req.flash(
            "registerMessage",
            "Registration Error: User Already Exists!"
          );
          console.log("Error: User Already Exists!");
        }
        return res.render("auth/register", {
          title: "Register",
          messages: req.flash("registerMessage"),
          displayName: req.user ? req.user.displayName : ""
        });
      } else {
        // if no error exists, then registration is successful
  
        // redirect the user
        return passport.authenticate("local")(req, res, () => {
          res.redirect("/project-list");
        });
      }
    });
  };
  
  module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect("/");
  };

  
  
   