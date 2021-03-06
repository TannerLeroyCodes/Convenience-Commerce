class UsersController < ApplicationController
    skip_before_action :is_authorized?, only: [:create]
    before_action :is_authorized?, only: [:show]
    before_action :is_admin?

    # def index  
    #     render json: User.all
    # end 

    def show 
    render json: @current_user
    end 

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 


    # def update 
    #     user = User.find(params[:id])
    #     user.update!(user_params)
    #     render json: user, status: :created
    # end 

    # def destroy 
    #     user = User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end 

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :admin, :password)
    end 

end
