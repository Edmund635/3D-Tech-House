Rails.application.routes.draw do
  resources :founders
  resources :abouts
  resources :orders, only: [:create]
  resources :reviews, only: [:create, :index, :show]
  resources :items, only: [:index, :show]
  resources :contacts
  resources :tickets, only: [:index, :show, :create, :update]
  resources :admin_users, only: [:show]
  resources :customers, only: [:index, :show, :create, :destroy]
  
  get "/me", to: "customers#show"
  delete "/me", to: "customers#destroy"
  get "admin/me", to: "admin_users#show"
  post "/signup", to: "customers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "admin/login", to: "admin_sessions#create"
  delete "admin/logout", to: "admin_sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
