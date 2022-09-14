class ItemsController < ApplicationController
    # skip_before_action :authorize_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
    def index
        render json: Item.all
    end

    def show
        course = Item.find(params[:id])
        render json: course, serializer: ItemSerializer
    end


    private

    def render_not_found_error
        render json: {error: "Course not found"}, status: 404
    end
end
