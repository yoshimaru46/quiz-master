# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AnswerSerializer, type: :serializer do
  let!(:question) { create(:question) }
  let!(:answer) { create(:answer, question: question) }

  let(:serializer) { described_class.new(answer) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer) }
  let(:subject) { JSON.parse(serialization.to_json) }

  it 'returns serialized data' do
    expect(subject['id']).to eq(answer.id)
    expect(subject['question_id']).to eq(answer.question_id)
    expect(subject['content']).to eq(answer.content)
    expect(subject['correct']).to eq(answer.correct)
  end
end
