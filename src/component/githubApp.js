import userGithub from './userGithub'
function GitHubApp() {
    const [user,followers,fetchfollower,loading] = userGithub();
    console.log("user",followers);
  return (

    <div> 
     <h3>Github User : {user.name}</h3>
     <h3>Github Username : {user.login}</h3>
     <h3>Github followers : {user.followers}</h3>
     <button onClick={fetchfollower}>Get Folowers</button>
     <hr />
     <h3>Follower List</h3>
     {loading&&<p>Loading...</p>}
     {followers?.map((follower) => {
     return <p>Follower : {follower.login}</p>}
     )}
    </div>
  )
}

export default GitHubApp