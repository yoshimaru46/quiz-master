# frozen_string_literal: true

FactoryBot.define do
  factory :question do
    content { generate(:sentence) }
    answer_content { generate(:sentence) }
  end
end
