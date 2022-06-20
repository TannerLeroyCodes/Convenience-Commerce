# config/routes.rb
Rails.application.routes.draw do
  resources :order_items
  resources :orders
  resources :users
  resources :products
  resources :categories, only: [:index, :create, :update, :destroy]
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end