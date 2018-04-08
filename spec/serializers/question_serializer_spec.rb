# frozen_string_literal: true

require 'rails_helper'

RSpec.describe QuestionSerializer, type: :serializer do
  let!(:question) { create(:question) }

  let(:serializer) { described_class.new(question) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer) }
  let(:subject) { JSON.parse(serialization.to_json) }

  it 'returns serialized data' do
    expect(subject['id']).to eq(question.id)
    expect(subject['content']).to eq(question.content)
    expect(subject['answer']).to eq(question.answer)
  end
end
