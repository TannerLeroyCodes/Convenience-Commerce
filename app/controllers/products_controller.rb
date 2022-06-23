class ProductsController < ApplicationController

     before_action :is_admin?, only: [:create, :update, :destroy]

    def index 
        render json: Product.all
    end 

    def show
        proudct = Product.find(params[:id])
        render json: proudct
    end 

    def create  
        product = Product.create!(product_params)
        render json: product, status: :created
    end 

    def update 
        product = Product.find(params[:id])
        product.update!(product_params)
        render json: product, status: :created
    end 

    def destroy 
        product = Product.find(params[:id])
        product.destroy
        head :no_content
    end 

    private 

    def product_params
        params.permit(:description, :stock, :price, :favorite, :category_id)
    end 

end
