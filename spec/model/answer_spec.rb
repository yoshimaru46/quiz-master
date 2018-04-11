# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Answer, type: :model do
  describe 'relations' do
    it { is_expected.to belong_to(:question) }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:question) }
    it { is_expected.to validate_presence_of(:content) }
    it { is_expected.to validate_presence_of(:correct) }
  end
end
