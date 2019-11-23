import React from 'react';

const RepoList = (props) => {
  let list = props.repos.map(element => {
    return (
    <tr key={element.idrepo}>
      <td><img src={element.avatar_url} /></td>
      <td>User: {element.user}</td>
      <td><a href={element.html_url}>Repo Name: {element.reponame}</a></td>
      <td>Last Updated: {element.updated_at}</td>
    </tr>
  )});
  return (
    <div>
      <p>Repo List Component</p>
      <p>Showing {props.repos.length} repos.</p>
      <table>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}

export default RepoList;