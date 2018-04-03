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
              <User user={users[2]}></User>
              </tbody>
          </table>
      </React.Fragment>
    );
  }
});