# frozen_string_literal: true

class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid do |e|
    render json: { message: e.to_s }, status: :unprocessable_entity
  end

  rescue_from ActiveRecord::RecordNotFound do
    render json: { message: 'Record not found' }, status: :not_found
  end

  rescue_from ArgumentError do |e|
    render json: { message: e.to_s }, status: :internal_server_error
  end

  protected

  def render_error_message(model: nil, status: :bad_request)
    full_messages = model.errors.full_messages
    render json: { message: full_messages }, status: status
  end
end
