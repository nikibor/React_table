var Users = createReactClass({
  render: function() {
      let users = JSON.parse(this.props.data);
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
                  <User user={users[0]}/>
                  <User user={users[1]}/>
                  <User user={users[2]}/>
                  <User user={users[3]}/>
              </tbody>
          </table>
      </React.Fragment>;
  }
});