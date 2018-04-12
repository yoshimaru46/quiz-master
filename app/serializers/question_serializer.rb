# frozen_string_literal: true

class QuestionSerializer < ActiveModel::Serializer
  attributes %i[
    id
    content
    answer_content
  ]
end
