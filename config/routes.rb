Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, shallow: true do
        resources :answers, only: %i[index show create]
      end
    end
  end
end
