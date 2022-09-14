class SessionsController < ApplicationController
  # skip_before_action :authorize_user, only: [:create]
  
  def create
    customer = Customer.find_by(username: params[:username])
    if customer&.authenticate(params[:password]) #If user exists and user is authenticated '&.' 
      session[:customer_id] = customer.id
      render json: customer, status: :ok
    else
      render json: { errors: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      session.clear
    else
      render json: { errors: "No active session" }, status: :unauthorized
    end
  end
end