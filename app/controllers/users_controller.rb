class UsersController < ApplicationController
  def index
      @users = User.all
      # @users.to_json
      @users.as_json
  end
end
