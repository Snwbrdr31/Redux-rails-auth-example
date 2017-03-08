Rails.application.routes.draw do
  # Root Route
  root 'home#index'

  # Devise Routes
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Resource Routes

  # Namespaced Routes
  namespace :api do
    get 'user_info', to: 'users#info'
  end

  # GET Routes

  # POST Routes

  # PUT Routes

  # DELETE Routes
  get '*unmatched_route', to: 'home#index'
end
