const registerUser = (req, res) => {

    const userName = req.body.name;
    const userEmail= req.body.email;
    const userPassword= req.body.password;

  res.json ({
  sucess : true,
  });

};

 module.exports =registerUser;
 