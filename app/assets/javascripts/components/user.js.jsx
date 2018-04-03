var User = createReactClass({

  render: function() {
    return (
      <React.Fragment>
          <tr>
              <td>
                  <h6>{this.props.user.id}</h6>
                  {/*asdasd*/}
              </td>
              <td>
                  <h6>{this.props.user.name}</h6>
                  {/*qweqweqwe*/}
              </td>
          </tr>
      </React.Fragment>
    );
  }
});

