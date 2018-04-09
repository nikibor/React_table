var User = createReactClass({
  render: function() {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.role}</td>
            <td>{props.user.status}</td>
            <td>{props.user.email}</td>
            <td>{props.user.name}</td>
            <td>{props.user.surname}</td>
            <td>{props.user.birth}</td>
        </tr>
    );
  }
});

