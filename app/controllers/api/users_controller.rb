class Api::UsersController < ApplicationController
  def info
    if current_user
      render json: current_user
    else
      render json: {}
    end 
  end
end
