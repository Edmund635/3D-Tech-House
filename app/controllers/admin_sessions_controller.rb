class AdminSessionsController < ApplicationController  
  def create
    admin_user = AdminUser.find_by(username: params[:username])
    if admin_user&.authenticate(params[:password]) #If user exists and user is authenticated '&.' 
      session[:admin_user_id] = admin_user.id
      render json: admin_user, status: :ok
    else
      render json: { errors: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def destroy
    if current_admin_user
      session.clear
    else
      render json: { errors: "No active session" }, status: :unauthorized
    end
  end
end
