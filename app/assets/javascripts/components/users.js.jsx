var Users = createReactClass({
  render: function() {
      var users = JSON.parse(this.props.data);
      var userTemplate = users.map(function(item, index) {
          return (
              <tr key={index}>
                  <td className="news__author">{item.id}</td>
                  <td className="news__author">{item.role_id}</td>
                  <td className="news__author">{item.status_id}</td>
                  <td className="news__author">{item.email}</td>
                  <td className="news__author">{item.name}</td>
                  <td className="news__author">{item.surname}</td>
                  <td className="news__author">{item.birth}</td>
              </tr>
          )
      });
      return <React.Fragment>
          <h3>Управление пользователями</h3>
          <table className={'table'}>
              <thead>
              <tr>
                  <th>#</th>
                  <th>Роли</th>
                  <th>Статус</th>
                  <th>E-mail</th>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Дата рождения</th>
              </tr>
              </thead>
              <tbody>
                {userTemplate}
              </tbody>
          </table>
      </React.Fragment>;
  }
});