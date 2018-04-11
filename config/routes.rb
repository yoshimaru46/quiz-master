Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, shallow: true do
        resources :answers, only: %i[index show crate]
      end
    end
  end
end
