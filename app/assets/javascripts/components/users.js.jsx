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
              <a class="dropdown-item" href="#">{item}</a>
          )
      });
      var statusesTemplate = statuses.map(function(item, index) {
          return (
              <a class="dropdown-item" href="#">{item}</a>
          )
      });
      return <React.Fragment>
          {console.log(users)}
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
                      <div class="dropdown">
                          <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Роли
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              {rolesTemplate}
                          </div>
                      </div>
                  </th>
                  <th>
                      <div class="dropdown">
                          <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Статусы
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              {statusesTemplate}
                          </div>
                      </div>
                  </th>
                  <th>
                      <input type="email" class="form-control" id="InputEmail" placeholder="E-mail"/>
                  </th>
                  <th>
                      <input type="text" class="form-control" id="InputName" placeholder="Имя"/>
                  </th>
                  <th>
                      <input type="text" class="form-control" id="InputSurname" placeholder="Фамилия"/>
                  </th>
                  <th>
                      <input type="date" class="form-control" id="InputDate"/>
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