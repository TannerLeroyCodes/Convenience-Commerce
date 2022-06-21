class UsersController < ApplicationController


def index  
    render json: User.all
end 

def show 
    current_user = User.find_by!(id: session[:current_user])
    render json: current_user
end 

def create 
    user = User.create!(user_params)
    render json: user, status: :created
end 


def update 
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :created
end 

def destroy 
    user = User.find(params[:id])
    user.destroy
    head :no_content
end 

private

def user_params
    params.permit(:first_name, :last_name, :email, :admin, :password_digest)
end 

end
