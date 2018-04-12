# frozen_string_literal: true

class AnswerSerializer < ActiveModel::Serializer
  attributes %i[
    id
    question_id
    content
    correct
  ]
end
