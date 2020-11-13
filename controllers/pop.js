const Poppy = require('../models/poppy');
const nodemailer = require('nodemailer');

module.exports = {
    about,
    store,
    newForm,
    create,
    home,
    showMap,
    users,
    contact_send,
    contact_error,
    contact,
    send,
    frame,
    pass

  };

function home(req, res) {
  res.render('home')
}

  function about(req, res) {
    res.render('about')
}

function store(req, res) {
    res.render('store')
}

function newForm(req, res) {
  res.render('newForm')
}

function create(req, res) {
  const poppy = new Poppy(req.body);
  poppy.save(function(err) {
    if (err) { return err } else {
    res.render('newForm_send');
    }
  });
}

function showMap(req, res) {
  Poppy.find({}, function(err, users) {
    if(err){
      console.log(err)
    }
    else{
      let x = users;
      let locations;
      let addressArray = [];
      let companyArray = [];
      let websiteArray = [];
      let mapArray = [];
    for (var item of x) {
      companyArray.push(item.Company);
      addressArray.push(item.Address + ' , ' + item.City);
      websiteArray.push(item.Website);
      mapArray.push(item.google_map);
    };

    let all = [companyArray, addressArray, websiteArray, mapArray];
    let mix = [];

    for (var i = 0; all.length !== 0; i++) {
    var j = 0;
    while (j < all.length) {
        if (i >= all[j].length) {
            all.splice(j, 1);
        } else {
            mix.push(all[j][i]);
            j += 1;
        }
    }
}

function group3(arr, len) {
     let chunks = [];
     let copy  = arr; // Use a copy to not modifiy the original array
     while(copy.length + 1 > len) {
         chunks.push(copy.splice(0, len));
     }
     return chunks;
}

  locations = group3(mix, 4);
      res.render('map', {locations: locations})
    }
  })
};

function frame(req, res) {
  Poppy.find({}, function(err, users) {
    if(err){
      console.log(err)
    }
    else{
      res.render('iframeMap', {users: users})
    }
  })
};


function users(req, res) {
  let query = Poppy.find({});
  query.exec(function(err, users){
      if(err) res.send(err);
      res.json(users)
  });
};

function contact_send(req, res) {
  console.log('Request for contact send page recieved');
    res.render('contact_send');
};

function contact_error(req, res) {
  console.log('Request for contact error page recieved');
    res.render('contact_error');
};

function contact(req, res) {
  console.log('Request for contact page recieved');
    res.render('contact');
}

function send(req, res) {
  var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var enquiry = req.body.enquiry;

  
    var emailMessage = `Message From ${name},\n\nTheir email is: ${email}\n\nTheir Phone number is: ${phone}\n\nTheir message is: ${enquiry}\n`;
  
    console.log(emailMessage);
    res.redirect('/contact_send');
  
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'hollypoppy737@gmail.com',
        pass: 'hanquiand',
      }
    });
  
    var mailOptions = {
      from: 'aclark13861@gmail.com',
      to: 'hollypoppy737@gmail.com',
      subject: 'Contact Info',
      text: emailMessage
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.redirect('/contact_send');
      } else {
        console.log('Message Sent: ' + info.response);
        console.log('Email Message: ' + emailMessage);
        res.redirect('/contact_error');
      }
    });
}

function pass(req, res) {
  res.render('password')
};

