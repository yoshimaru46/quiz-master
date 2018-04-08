# frozen_string_literal: true

FactoryBot.define do
  factory :question do
    content { generate(:sentence) }
    answer { generate(:sentence) }
  end
end
