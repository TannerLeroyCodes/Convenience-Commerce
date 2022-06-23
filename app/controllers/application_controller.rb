class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # ensuring users must be authorized (authenticated to access any portion of the code)
  # before_action :is_logged_in? 
  before_action :is_authorized?

  def current_user
    User.find_by(id: session[:user_id])
  end

  # def is_logged_in? 
  #   # byebug
  #   render json: {errors: ["Must log-in or create an account to access Convenient Commerce"]}, status: :unauthorized unless current_user
  # end

  def is_admin?
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless current_user.admin
  end

  def is_authorized? 
    # byebug
    # @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized", "Must log-in or create an account to access Convenient Commerce"]}, status: :unauthorized unless current_user
  end

  private 

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors}, status: :unprocessable_entity
  end 
    
  def render_not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

end
