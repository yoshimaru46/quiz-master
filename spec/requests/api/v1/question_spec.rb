# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::Question, type: :request do
  describe 'GET /api/v1/questions' do
    context 'when some resource' do
      let!(:question1) { create(:question) }
      let!(:question2) { create(:question) }

      it { is_expected.to eq 200 }

      it 'returns questions' do
        subject
        expect(json.count).to eq 2
        expect(json[0]['content']).to eq question2.content
        expect(json[1]['content']).to eq question1.content
      end
    end

    context 'when no resource' do
      it { is_expected.to eq 200 }

      it 'returns empty array' do
        subject
        expect(json).to eq []
      end
    end
  end

  describe 'GET /api/v1/questions/:id' do
    context 'when some resource' do
      let(:question) { create(:question) }
      let(:id) { question.id }

      it { is_expected.to eq 200 }

      it 'returns questions' do
        subject
        expect(json['content']).to eq question.content
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

  describe 'POST /api/v1/questions' do
    let(:params) do
      { question: attributes_for(:question) }
    end

    context 'when create with correct attributes' do
      it { is_expected.to eq 201 }

      it 'returns questions' do
        subject
        expect(json['content']).to eq params[:question][:content]
      end

      it { expect { subject }.to change(Question, :count).by(1) }
    end

    context 'when validate error' do
      before do
        params[:question][:content] = nil
      end

      it { is_expected.to eq 422 }

      it 'returns validate error message' do
        subject
        expect(json['message'][0]).to eq "Content can't be blank"
      end

      it { expect { subject }.not_to change(Question, :count) }
    end
  end

  describe 'PATCH /api/v1/questions/:id' do
    let(:question) { create(:question) }
    let!(:id) { question.id }

    let(:params) do
      { question: attributes_for(:question) }
    end

    context 'when update with correct attributes' do
      it { is_expected.to eq 200 }

      it 'returns questions' do
        subject
        expect(json['content']).to eq params[:question][:content]
      end

      it { expect { subject }.not_to change(Question, :count) }
    end

    context 'when validate error' do
      before do
        params[:question][:content] = nil
      end

      it { is_expected.to eq 422 }

      it 'returns validate error message' do
        subject
        expect(json['message'][0]).to eq "Content can't be blank"
      end

      it { expect { subject }.not_to change(Question, :count) }
    end
  end

  describe 'DELETE /api/v1/questions/:id' do
    let(:question) { create(:question) }
    let!(:id) { question.id }

    context 'when destroy success' do
      it { is_expected.to eq 200 }

      it 'returns questions' do
        subject
        expect(json['content']).to eq question.content
      end

      it { expect { subject }.to change(Question, :count).by(-1) }
    end

    context 'when record not found' do
      let(:id) { 'not-found' }

      it { is_expected.to eq 404 }

      it 'returns empty array' do
        subject
        expect(json['message']).to eq 'Record not found'
      end

      it { expect { subject }.not_to change(Question, :count) }
    end
  end
end
