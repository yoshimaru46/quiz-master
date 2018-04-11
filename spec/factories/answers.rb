# frozen_string_literal: true

FactoryBot.define do
  factory :answer do
    content { generate(:sentence) }
    correct { false }
  end
end
