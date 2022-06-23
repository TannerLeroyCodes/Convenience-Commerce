class OrdersController < ApplicationController
    before_action :is_authorized?
    # note: same q as with order_items_controller. don't think is_admin? is needed, but want to double check

def index 
    orders = Order.all
    render json: orders, include: :order_items
end 

def show 
    order = Order.find(params[:id])
    render json: order, include: :order_items
end 

def create 
    order = Order.create!(order_params)
    render json: order, status: :created
end 

def update
    order = Order.find(params[:id])
    order.update!(order_params)
    render json: order, status: :created
end 

def destroy
    order = Order.find(params[:id])
    order.destroy
    head :no_content
end 

private 

def order_params
    params.permit(:ordered, :user_id)
end 


end
