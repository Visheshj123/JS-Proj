class GitHub{
  constructor(){
    this.config = {
      headers: {
        Authorization: 'token INSERT-TOKEN-HERE'
      }
    }
  }

  async getUserInfo(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

      const profileData = await profileResponse.json();
      return {
          profile: profileData
      }
  }
}
