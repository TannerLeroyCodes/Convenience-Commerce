
class FallbackController < ActionController::Base
  before_action :is_authorized?
    def index
      render file: 'public/index.html'
    end
end

