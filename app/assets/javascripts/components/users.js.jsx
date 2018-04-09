var Users = createReactClass({
  render: function() {
      var users = JSON.parse(this.props.data);
      let roles = [...new Set(users.map(item => item.role))];
      let statuses = [...new Set(users.map(item => item.status))];
      var userTemplate = users.map(function(item, index) {
          return (
              <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.role}</td>
                  <td>{item.status}</td>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.birth}</td>
              </tr>
          )
      });
      var rolesTemplate = roles.map(function(item, index) {
          return (
              <option key={index}>{item}</option>
          )
      });
      var statusesTemplate = statuses.map(function(item, index) {
          return (
              <option key={index}>{item}</option>
          )
      });

      return <React.Fragment>
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
              <tr>
                  <th>#</th>
                  <th>
                      <select className="form-control" id="InputRole">
                          {rolesTemplate}
                      </select>
                  </th>
                  <th>
                      <select className="form-control" id="InputStatus">
                          {statusesTemplate}
                      </select>
                  </th>
                  <th>
                      <input type="email" className="form-control" id="InputEmail" placeholder="E-mail"/>
                  </th>
                  <th>
                      <input type="text" className="form-control" id="InputName" placeholder="Имя"/>
                  </th>
                  <th>
                      <input type="text" className="form-control" id="InputSurname" placeholder="Фамилия"/>
                  </th>
                  <th>
                      <input type="date" className="form-control" id="InputDate"/>
                  </th>
              </tr>
              </thead>
              <tbody>
                {userTemplate}
              </tbody>
          </table>
      </React.Fragment>;
  }
});