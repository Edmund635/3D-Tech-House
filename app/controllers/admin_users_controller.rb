class AdminUsersController < ApplicationController
    before_action :is_authorized?
    def show
        if current_admin_user
            render json: current_admin_user, serializer: AdminUserSerializer, status: :ok
        else
            render json: { errors: "No active session" }, status: :unauthorized
        end
    end

    private

    def created_params
        params.permit(:username, :password)
    end
end
