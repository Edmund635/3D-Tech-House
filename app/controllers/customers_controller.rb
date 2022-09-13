class CustomersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]
    def create
        customer = Customer.create!(created_params)
        session[:customer_id] = customer.id
        render json: customer, status: :ok
    end

    def index
        render json: Customer.all
    end

    def show
        if current_user
            render json: current_user, serializer: CustomerSerializer, status: :ok
        else
            render json: { errors: "No active session" }, status: :unauthorized
        end
    end

    def destroy
        if current_user
            current_user.destroy
            head :no_content
        else
            render json: { errors: "No active session" }, status: :unauthorized
        end
    end

    private

    def created_params
        params.permit(:username, :password, :admin_user_id)
    end
end
