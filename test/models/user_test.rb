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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
