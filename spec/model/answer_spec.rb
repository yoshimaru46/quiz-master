# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Answer, type: :model do
  describe 'relations' do
    it { is_expected.to belong_to(:question) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:question) }
    it { is_expected.to validate_presence_of(:content) }
  end

  describe '#correct_answer?' do
    let(:question) { build_stubbed(:question, answer_content: 'content') }
    let(:content) { nil }
    let(:answer) { build_stubbed(:answer, question: question, content: content) }

    subject { answer.correct_answer? }

    context 'when correct' do
      let(:content) { 'content' }
      it { is_expected.to be_truthy }
    end

    context 'when incorrect' do
      let(:content) { 'incorrect_content' }
      it { is_expected.to be_falsey }
    end
  end

  describe '#set_correct' do
    let(:question) { build_stubbed(:question, answer_content: 'content') }
    let(:content) { nil }
    let(:answer) { build_stubbed(:answer, question: question, content: content) }

    before do
      answer.set_correct
    end

    subject { answer.correct }

    context 'when correct' do
      let(:content) { 'content' }
      it { is_expected.to be_truthy }
    end

    context 'when incorrect' do
      let(:content) { 'incorrect_content' }
      it { is_expected.to be_falsey }
    end
  end
end
