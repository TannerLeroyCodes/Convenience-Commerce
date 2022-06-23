class SessionsController < ApplicationController
    # skip_before_action :is_logged_in?, only: :login
    skip_before_action :is_authorized?, only: :login

    def login
        
        user = User.find_by(email: params[:email])
        if  user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok #, serializer: UserSerializer
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end
    
    def logout
        session.delete :user_id
        head :no_content
    end
    

end
