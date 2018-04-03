var User = createReactClass({

  render: function() {
    return (
      <React.Fragment>
          <tr>
              <td>
                  <h6>{this.props.user.id}</h6>
              </td>
              <td>
                  <h6>{this.props.user.name}</h6>
              </td>
          </tr>
      </React.Fragment>
    );
  }
});

