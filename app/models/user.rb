# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  role_id    :integer
#  status_id  :integer
#  email      :string
#  name       :string
#  surname    :string
#  birth      :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_users_on_role_id    (role_id)
#  index_users_on_status_id  (status_id)
#
# Foreign Keys
#
#  fk_rails_...  (role_id => roles.id)
#  fk_rails_...  (status_id => statuses.id)
#

class User < ApplicationRecord
  belongs_to :role
  belongs_to :status

  validates :email, presence: true

  def as_json(options = nil){
      id: id,
      role: role.title,
      status: status.state,
      email: email,
      name: name,
      surname: surname,
      birth: birth
  }
  end
end
