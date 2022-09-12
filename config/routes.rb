Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :founders
  resources :abouts
  resources :orders
  resources :reviews
  resources :items
  resources :contacts
  resources :tickets
  resources :admin_users
  resources :customers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
