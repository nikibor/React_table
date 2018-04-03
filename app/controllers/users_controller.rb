class UsersController < ApplicationController
  def index
      @users = User.all
      # @users.includes(:title, :state)
      @users.to_json
  end
end
