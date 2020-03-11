class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML =`
    <div class="card card-body mb-3">
        <div class='row'>
            <div class="col-md-3">
              <img class="img-fluid mb-2" src= "${user.avatar_url}" alt="Avatar Image" />
              <a role="button" href="user.html_url" target="_blank" class="btn btn-primary btn-block mb-3">GitHub Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following ${user.following}</span>
              <br><br>
              <ul class="list-group">
                  <li class = 'list-group-item'>Company: ${user.company}</li>
                  <li class = 'list-group-item'>Website/Blog ${user.blog}</li>
                  <li class = 'list-group-item'>Location ${user.location}</li>
                  <li class = 'list-group-item'>Member Since ${user.created_at}</li>
              </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos){
    let output = '';
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    //Put output into document
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(errMsg, errClass){
    this.clearAlert();
    console.log(document.querySelector('.alert'));

      const div = document.createElement('div');
      div.className = errClass;
      div.setAttribute('role', 'alert');
      div.appendChild(document.createTextNode(errMsg));

      const container = document.querySelector('.searchContainer');
      const search = document.querySelector('.search');
      console.log(search);
      //Insert before the search
      container.insertBefore(div, search);

  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  clearAlert(){
    const err = document.querySelector('.alert');
    if(err){
      err.remove();
    }

  }

}
