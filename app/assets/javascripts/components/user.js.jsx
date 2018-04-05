var User = createReactClass({

  render: function() {
      var users = this.props.data;
      var userTemplate = users.map(function (item, index) {
          <div key={index}>
              <td>
                  <h6>{index}</h6>
              </td>
          </div>
              {/*{alert(index)}*/}
              {/*<td><h6>{item.role_id}</h6></td>*/}
              {/*<td><h6>{item.status_id}</h6></td>*/}
              {/*<td><h6>{item.email}</h6></td>*/}
              {/*<td><h6>{item.name}</h6></td>*/}
              {/*<td><h6>{item.surname}</h6></td>*/}
              {/*<td><h6>{item.birth}</h6></td>*/}
          {/*// </tr>*/}
      });
    return (
      <React.Fragment>
          <tr>
            {userTemplate}
          </tr>
      </React.Fragment>
    );
  }
});

