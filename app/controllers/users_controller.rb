class UsersController < ApplicationController
  def index
      @users = User.order(:name).page(params[:page])
      # @users.to_json
      @users.as_json
  end
end
