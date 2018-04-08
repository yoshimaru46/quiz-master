# frozen_string_literal: true

# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  content    :text
#  answer     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :content, presence: true
  validates :answer, presence: true
end
