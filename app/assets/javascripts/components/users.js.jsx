var Users = createReactClass({
  render: function() {
      users = JSON.parse(this.props.data);
    return (
      <React.Fragment>
          <table>
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
                      })
                  }
              </tbody>
          </table>
          {/*{React.render("User")}*/}
      </React.Fragment>
    );
  }
});