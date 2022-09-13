class OrdersController < ApplicationController
    def create
        order = Order.create!(created_params)
        render json: order, status: :created
    end


    private

    def created_params
        params.permit(:customer_id, :item_id)
    end
end
