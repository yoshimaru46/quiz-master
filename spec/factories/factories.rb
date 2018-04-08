# frozen_string_literal: true

FactoryBot.define do
  sequence(:sentence) { Faker::Lorem.sentence }
end
