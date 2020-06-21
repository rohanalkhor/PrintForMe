var database;
var users;
var activeUsers;

function setup() {
  //let cnv = createCanvas(500,500);
  //cnv.parent('form'); 
  //background(220);

  //Firebase Configure
  var firebaseConfig = {
    apiKey: "AIzaSyB0QZDQfgDhiaoTdCN2LE3fVmQ7B1RNXZE",
    authDomain: "printforme-44a84.firebaseapp.com",
    databaseURL: "https://printforme-44a84.firebaseio.com",
    projectId: "printforme-44a84",
    storageBucket: "printforme-44a84.appspot.com",
    messagingSenderId: "390791125464",
    appId: "1:390791125464:web:a944a2d3e7a7104875baad",
    measurementId: "G-TEZQMD69J8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  database = firebase.database();
  users =  database.ref('users');
  activeUsers =  database.ref('activeUsers');
  
}


function login()
{
  var username = select('#ul');
  var password = select('#pl');

  
  var data={
    Username : username.value(),
    Password : password.value()
  };
  activeUsers.push(data);

  
  
        
}


function errData(){
  alert("Data Transfer Error");
}

var username;
var password;
var email;


function usersDataGetCreate(data) {

  var usersData = data.val();
  var keys = Object.keys(usersData);
  var f=1;
  console.log("user creation in progress");

  for(var i=0 ; i< keys.length ; i++)
  {
      var user = usersData[keys[i]];
      if(user.Username == username.value())
      {
        alert("Username Already Taken");
        f=0;
        break;
      }

  }
  
  if(f==1)
  {
    
    var data={
      Username: username.value(),
      Password: password.value(),
      Email : email.value()
  
    }
    //activeUsers.push(data);
    users.push(data);
    
  }  
}

function create()
{ 
  
  email = select('#e');
  username = select('#uc');
  password = select('#pc');

 
  //var ref = database.ref("users");
  //ref.on("value", usersDataGetCreate, errData);
  users.push(data);
  activeUsers.push(data);
  TransitionToHomePage();
    
}


/*
function TransitionToRegisterPage()
{
  var registerform = select('register-form');
  var loginform = select('login-form');
  //registerform.style('display','contents');
  loginform.style('display','none');

}
function TransitionToSignInPage()
{
  var registerform = select('register-form');
  var loginform = select('login-form');
  //registerform.style('display','none');
  loginform.style('display','contents');

}*/