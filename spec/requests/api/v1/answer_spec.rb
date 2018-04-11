# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Answer', type: :request do
  describe 'GET /api/v1/questions/:id/answers' do
    context 'when some resource' do
      let(:question) { create(:question) }
      let(:id) { question.id }

      let!(:answer1) { create(:answer, question: question) }
      let!(:answer2) { create(:answer, question: question) }

      it { is_expected.to eq 200 }

      it 'returns questions' do
        subject
        expect(json.count).to eq 2
        expect(json[0]['content']).to eq answer1.content
        expect(json[1]['content']).to eq answer2.content
      end
    end

    context 'when no resource' do
      let(:question) { create(:question) }
      let(:id) { question.id }

      it { is_expected.to eq 200 }

      it 'returns empty array' do
        subject
        expect(json).to eq []
      end
    end
  end

  describe 'GET /api/v1/answers/:id' do
    let(:question) { create(:question) }

    context 'when some resource' do
      let!(:answer) { create(:answer, question: question) }
      let(:id) { answer.id }

      it { is_expected.to eq 200 }

      it 'returns questions' do
        subject
        expect(json['content']).to eq answer.content
      end
    end

    context 'when no resource' do
      let(:id) { 'not-found' }

      it { is_expected.to eq 404 }

      it 'returns empty array' do
        subject
        expect(json['message']).to eq 'Record not found'
      end
    end
  end

  describe 'POST /api/v1/questions/:question_id/answers' do
    let(:question) { create(:question) }

    let(:question_id) { question.id }

    let(:params) do
      { answer: attributes_for(:answer) }
    end

    context 'when create with correct attributes' do
      it { is_expected.to eq 201 }

      it 'returns answers' do
        subject
        expect(json['content']).to eq params[:answer][:content]
      end

      it { expect { subject }.to change(Answer, :count).by(1) }
    end

    context 'when validate error' do
      before do
        params[:answer][:content] = nil
      end

      it { is_expected.to eq 422 }

      it 'returns validate error message' do
        subject
        expect(json['message'][0]).to eq "Content can't be blank"
      end

      it { expect { subject }.not_to change(Answer, :count) }
    end
  end
end
