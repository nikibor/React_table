var Users = createReactClass({
  render: function() {
      users = JSON.parse(this.props.data);
    return (
      <React.Fragment>
          <table className={'table'}>
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
              </thead>
              <tbody>
                  {
                      users.forEach(function (user) {
                          console.log(user.email);
                          // React.createElement(User,{user: user});
                      })
                  }
                  {React.createElement(User,{user: users[2]})}
                  {React.createElement(User,{user: users[2]})}
                  {React.createElement(User,{user: users[2]})}
              </tbody>
          </table>

      </React.Fragment>
    );
  }
});