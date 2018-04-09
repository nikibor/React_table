var Users = createReactClass({
    getInitialState () {
        return {
            settings: {},
            data: JSON.parse(this.props.data),
            sorted: {}
        };
    },

    UpdateSettings(){
        this.setState({
            settings: {
                role: document.getElementById('InputRole').value,
                status: document.getElementById('InputStatus').value,
                email: document.getElementById('InputEmail').value,
                name: document.getElementById('InputName').value,
                surname: document.getElementById('InputSurname').value,
                birth: document.getElementById('InputDate').value
            }
        });
    },
    SortTable(){
        this.setState({
            sorted: this.state.data.filter(function (item) {
                return item.status == 'Active';
            })
        })
    },

    RefreshHandler() {
        this.UpdateSettings();
        this.SortTable();
        console.log(this.state.data);
    },

  render: function() {
      var users = this.state.data;
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
          <table className={'table table-bordered'}>
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
                  <th>
                      <button className={'btn btn-primary'} id="Refresh" onClick={this.RefreshHandler}>Обновить</button>
                  </th>
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