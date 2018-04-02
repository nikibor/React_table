role_test = Role.create(title: 'ROLE_TEST')
role_admin = Role.create(title: 'ADMIN')
role_guest = Role.create(title: 'GUEST')

status_active = Status.create(state: 'Active')
status_disabled = Status.create(state: 'Disabled')

user1 = User.create(role: role_test, status: status_active, email: 'test@test.com', name: 'Vasiliy',
                    surname: 'Vasilyev', birth: DateTime.new(2018,4,4))
user2 = User.create(role: role_admin, status: status_active, email: 'test2@test.com', name: 'Vasiliy',
                    surname: 'Vasilyev', birth: DateTime.new(2018,4,5))
user3 = User.create(role: role_guest, status: status_disabled, email: 'test3@test.com', name: 'Vasiliy',
                    surname: 'Vasilyev', birth: DateTime.new(2018,4,6))