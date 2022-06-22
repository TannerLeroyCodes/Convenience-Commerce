# config/routes.rb
Rails.application.routes.draw do
  resources :order_items
  resources :orders
  # resources :users
  resources :products
  resources :categories, only: [:index, :create, :update, :destroy]

  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/users/:user_id/orders/', to: "orders#index"




  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end