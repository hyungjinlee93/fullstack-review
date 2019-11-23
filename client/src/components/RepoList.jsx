import React from 'react';

const RepoList = (props) => {
  let list = props.repos.map(element => (
    <tr>
      <td><img src={element.avatar_url} /></td>
      <td>User: {element.user}</td>
      <td>Repo Name: {element.reponame}</td>
      <td>Last Updated: {element.updated_at}</td>
    </tr>
  ));
  return (
    <div>
      <p>Repo List Component</p>
      <p>There are {props.repos.length} repos.</p>
      <table>
        {list}
      </table>
    </div>
  )
}

export default RepoList;