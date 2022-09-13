class ContactsController < ApplicationController
    def create
        contact = Contact.create!(created_params)
        render json: contact, status: :created
    end

    def index
        render json: Contact.all
    end

    def show
        contact = Contact.find(params[:id])
        render json: contact, serializer: ContactSerializer
    end

    def update
        contact = Contact.find(params[:id])
        contact.update!(created_params) 
        render json: contact, status: :accepted
    end

    def destroy
        contact = contact.find(params[:id])
        contact.destroy
        head :no_content
    end


    private
    def created_params
        params.permit(:last_name, :first_name, :email, :address, :phone_number, :customer_id)
    end
end
