# frozen_string_literal: true

module RequestHelpers
  private

  def json
    JSON.parse(response.body)
  end
end
