# frozen_string_literal: true

# == Schema Information
#
# Table name: questions
#
#  id             :integer          not null, primary key
#  content        :text
#  answer_content :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Question < ApplicationRecord
  has_many :answers, dependent: :destroy

  validates :content, presence: true
  validates :answer_content, presence: true
end
