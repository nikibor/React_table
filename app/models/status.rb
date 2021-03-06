# == Schema Information
#
# Table name: statuses
#
#  id         :integer          not null, primary key
#  state      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Status < ApplicationRecord
  has_many :users
  validates :state, uniqueness: true, presence: true
end
