class GitHub{
  constructor(){
    this.config = {
      headers: {
        Authorization: 'token ENTERTOKEN'
      }
    }
    this.repos_count =3;
    this.repos_sort = 'created: asc';

  }

  async getUserInfo(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config);

      const profileData = await profileResponse.json();
      const repos = await repoResponse.json();
      return {
          profile: profileData,
          repos: repos
      }
  }
}
