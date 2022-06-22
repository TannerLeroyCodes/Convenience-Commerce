class OrderItemsController < ApplicationController

def index 
    render json: OrderItem.all, status: :ok
end 

def show
    order_item = OrderItem.find(params[:id])
    render json: order_item, status: :ok
end 

def create 
    order_item = OrderItem.create!(order_item_params)
    render json: order_item, status: :created
end 

def update 
    order_item = OrderItem.find(params[:id])
    order_item.update!(order_item_params)
    render json: order_item, status: :created
end 

def destroy
    order_item = OrderItem.find(params[:id])
    order_item.destroy
    head :no_content
end 

private 

def order_items_params
    params.permit(:product_id, :order_id, :quantity)
end 


end
