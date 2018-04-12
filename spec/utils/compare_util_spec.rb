# frozen_string_literal: true

require 'rails_helper'

describe CompareUtil, type: :util do
  using RSpec::Parameterized::TableSyntax

  describe '.integer_string?' do
    where(:str, :result) do
      'あいうえお' | false
      '123' | true
      '3.14' | false
      '１２３４５' | false
    end

    subject { CompareUtil.integer_string?(str) }

    with_them do
      it { is_expected.to eq(result) }
    end
  end

  describe '.float_string?' do
    where(:str, :result) do
      'あいうえお' | false
      '123' | true
      '3.14' | true
      '１２３４５' | false
    end

    subject { CompareUtil.float_string?(str) }

    with_them do
      it { is_expected.to eq(result) }
    end
  end

  describe '.convert_numbers_to_words' do
    where(:num, :word) do
      1 | 'one'
      21 | 'twenty one'
      231 | 'two hundred thirty one'
      4030 | 'four thousand thirty'
      1_000_100 | 'one million one hundred'
      21.77 | 'twenty one and seventy seven hundredths'
    end

    subject { CompareUtil.convert_numbers_to_words(num) }

    with_them do
      it { is_expected.to eq(word) }
    end
  end

  describe '.check_and_convert_numbers_to_words' do
    where(:num, :word) do
      '1' | 'one'
      '21' | 'twenty one'
      '231' | 'two hundred thirty one'
      '4030' | 'four thousand thirty'
      '1000100' | 'one million one hundred'
      '21.77' | 'twenty one and seventy seven hundredths'
      'ABC' | 'ABC'
    end

    subject { CompareUtil.check_and_convert_numbers_to_words(num) }

    with_them do
      it { is_expected.to eq(word) }
    end
  end

  describe '.equal_value?' do
    where(:correct_answer, :content, :result) do
      'answer' | 'answer' | true
      'Answer' | 'answer' | true
      'ANSWER' | 'answer' | true
      'answer' | 'ANSWER' | true
      '1' | '1' | true
      'one' | '1' | true
      'one' | 'one' | true
      '1' | 'One' | true
      '21' | 'Twenty One' | true
      '231' | 'two hundred thirty one' | true
      '4030' | 'four thousand thirty' | true
      '1000100' | 'one million one hundred' | true
      '21.77' | 'twenty one and seventy seven hundredths' | true
      'corrent' | 'incorrent' | false
      'one2' | '12' | false
    end

    subject { CompareUtil.equal_value?(correct_answer, content) }

    with_them do
      it { is_expected.to eq(result) }
    end
  end
end
