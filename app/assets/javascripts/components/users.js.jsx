var Users = createReactClass({
    getInitialState () {
        data = JSON.parse(this.props.data);
        return {
            settings: {},
            data: data,
            sorted: data,
            roles: [...new Set(data.map(item => item.role))],
            statuses: [...new Set(data.map(item => item.status))],
        };
    },

    SortId(e){
        if(document.getElementById(e.target.id).innerText === '▼'){
            document.getElementById(e.target.id).innerText = '▲';
            this.setState({sorted: this.state.data.sort(function (A, B) {return A.id - B.id;})});
        } else{
            document.getElementById(e.target.id).innerText = '▼';
            this.setState({sorted: this.state.data.sort(function (A, B) {return B.id - A.id;})});
        }
    },



    RefreshHandler(){
        this.setState({
            settings: {
                role: document.getElementById('InputRole').value,
                status: document.getElementById('InputStatus').value,
                email: document.getElementById('InputEmail').value,
                name: document.getElementById('InputName').value,
                surname: document.getElementById('InputSurname').value,
                birth: document.getElementById('InputDate').value
            },
            sorted: this.state.data.filter(function (item) {
                return item.status == document.getElementById('InputStatus').value
                    && item.role == document.getElementById('InputRole').value;
            })
        })
    },

    EmailHandler(e){
        if (e.key === 'Enter') {
            this.setState({
                sorted: this.state.data.filter(function (item) {
                    return item.email.includes(document.getElementById('InputEmail').value);
                })
            })
        }
    },

    NameHandler(e){
        if (e.key === 'Enter') {
            this.setState({
                sorted: this.state.data.filter(function (item) {
                    return item.email.includes(document.getElementById('InputName').value);
                })
            })
        }
    },

    SurnameHandler(e){
        if (e.key === 'Enter') {
            this.setState({
                sorted: this.state.data.filter(function (item) {
                    return item.email.includes(document.getElementById('InputSurname').value);
                })
            })
        }
    },

  render: function() {
      var users = this.state.sorted;
      let roles = this.state.roles;
      let statuses = this.state.statuses;
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
                  <th>
                      <div className={'btn-group'}>
                          <div className={'col-md-10'}>#</div>
                          <div id='sortId' className={'col-md-2'} onClick={this.SortId}>▲</div>
                      </div>
                  </th>
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
                      <input type="email" className="form-control" id="InputEmail" onKeyPress={this.EmailHandler} placeholder="E-mail"/>
                  </th>
                  <th>
                      <input type="text" className="form-control" id="InputName" onKeyPress={this.NameHandler} placeholder="Имя"/>
                  </th>
                  <th>
                      <input type="text" className="form-control" id="InputSurname" onKeyPress={this.SurnameHandler} placeholder="Фамилия"/>
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