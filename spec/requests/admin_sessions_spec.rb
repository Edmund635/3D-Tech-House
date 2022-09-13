require 'rails_helper'

RSpec.describe "AdminSessions", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/admin_sessions/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/admin_sessions/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
