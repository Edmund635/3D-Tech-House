class ReviewsController < ApplicationController
    skip_before_action :authorize_user
    def create
        review = Review.create!(created_params)
        render json: review, status: :created
    end

    def index
        render json: Review.all
    end

    def show
        review = Review.find(params[:id])
        render json: review, serializer: ReviewSerializer
    end

    private
    def created_params
        params.permit(:rating, :review, :item_id)
    end
end
