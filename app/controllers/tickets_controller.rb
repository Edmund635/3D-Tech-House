class TicketsController < ApplicationController
    def create
        ticket = Ticket.create!(created_params)
        render json: ticket, status: :created
    end

    def index
        render json: Ticket.all
    end

    def show
        ticket = Ticket.find(params[:id])
        render json: ticket, serializer: TicketSerializer
    end

    def update
        ticket = Ticket.find(params[:id])
        ticket.update!(created_params) 
        render json: ticket, status: :accepted
    end

    private
    def created_params
        params.permit(:issue, :customer_id)
    end
end
