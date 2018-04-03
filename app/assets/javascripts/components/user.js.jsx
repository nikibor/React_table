var User = createReactClass({

  render: function() {
      let user = this.props.user;
    return (
      <React.Fragment>
          <tr>
              <td><h6>{user.id}</h6></td>
              <td><h6>{user.role_id}</h6></td>
              <td><h6>{user.status_id}</h6></td>
              <td><h6>{user.email}</h6></td>
              <td><h6>{user.name}</h6></td>
              <td><h6>{user.surname}</h6></td>
              <td><h6>{user.birth}</h6></td>
          </tr>
      </React.Fragment>
    );
  }
});

