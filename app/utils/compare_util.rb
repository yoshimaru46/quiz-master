# frozen_string_literal: true

module CompareUtil
  def self.integer_string?(str)
    Integer(str)
    true
  rescue ArgumentError
    false
  end

  def self.float_string?(str)
    Float(str)
    true
  rescue ArgumentError
    false
  end

  def self.convert_numbers_to_words(num)
    I18n.with_locale(:en) { num.to_words remove_hyphen: true }
  end

  def self.check_and_convert_numbers_to_words(string)
    if integer_string?(string)
      convert_numbers_to_words(string.to_i)
    elsif float_string?(string)
      convert_numbers_to_words(string.to_f)
    else
      string
    end
  end

  def self.equal_value?(value1, value2)
    replaced_value1 = value1.tr('０-９', '0-9')
    replaced_value2 = value2.tr('０-９', '0-9')

    converted_value1 = check_and_convert_numbers_to_words(replaced_value1)
    converted_value2 = check_and_convert_numbers_to_words(replaced_value2)

    converted_value1.downcase!
    converted_value2.downcase!

    converted_value1.eql? converted_value2
  end
end
