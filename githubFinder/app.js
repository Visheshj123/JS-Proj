const github = new GitHub();
const ui = new UI();
const searchuser = document.getElementById('searchUser').addEventListener('keyup',(e) => {
  const userText = e.target.value;
  if(userText){
      github.getUserInfo(userText) //retuns object with attribute of profile
          .then(data => {
              if(data.profile.message === 'Not Found'){
                console.log('not found');
                ui.showAlert('User not found', 'alert alert-danger');
              }else{
                ui.clearAlert();
                ui.showProfile(data.profile);

              }
          }  );


  }else{
    console.log('there is no text');
    ui.clearProfile();
    ui.clearAlert();

  }
})
