# frozen_string_literal: true

# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  content     :text
#  correct     :boolean          default(FALSE)
#
# Indexes
#
#  index_answers_on_question_id  (question_id)
#

class Answer < ApplicationRecord
  belongs_to :question

  before_save :set_correct

  validates :question, presence: true
  validates :content, presence: true

  delegate :answer_content, to: :question

  def correct_answer?
    CompareUtil.equal_value? content, answer_content
  end

  def set_correct
    assign_attributes(correct: correct_answer? ? true : false)
  end
end
