// var Header = createReactClass({
//
//   render: function() {
//       var users = JSON.parse(this.props.data);
//       let roles = [...new Set(users.map(item => item.role))];
//       let statuses = [...new Set(users.map(item => item.status))];
//       var rolesTemplate = roles.map(function(item, index) {
//           return (
//               <option key={index}>{item}</option>
//           )
//       });
//       var statusesTemplate = statuses.map(function(item, index) {
//           return (
//               <option key={index}>{item}</option>
//           )
//       });
//     return (
//         <thead>
//         <tr>
//             <th>#</th>
//             <th>Роли</th>
//             <th>Статус</th>
//             <th>E-mail</th>
//             <th>Имя</th>
//             <th>Фамилия</th>
//             <th>Дата рождения</th>
//         </tr>
//         <tr>
//             <th>
//                 <button className={'btn btn-primary'} id="Refresh">Обновить</button>
//             </th>
//             <th>
//                 <select className="form-control" id="InputRole">
//                     {/*{rolesTemplate}*/}
//                 </select>
//             </th>
//             <th>
//                 <select className="form-control" id="InputStatus">
//                     {/*{statusesTemplate}*/}
//                 </select>
//             </th>
//             <th>
//                 <input type="email" className="form-control" id="InputEmail" placeholder="E-mail"/>
//             </th>
//             <th>
//                 <input type="text" className="form-control" id="InputName" placeholder="Имя"/>
//             </th>
//             <th>
//                 <input type="text" className="form-control" id="InputSurname" placeholder="Фамилия"/>
//             </th>
//             <th>
//                 <input type="date" className="form-control" id="InputDate"/>
//             </th>
//         </tr>
//         </thead>
//     );
//   }
// });
