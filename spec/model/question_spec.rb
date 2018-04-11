# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'relations' do
    it { is_expected.to have_many(:answers) }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:content) }
    it { is_expected.to validate_presence_of(:answer) }
  end
end
