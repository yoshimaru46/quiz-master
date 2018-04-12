puts 'Start inserting seed "questions" ...'

10.times do
  question = Question.create(
    {
      content: Faker::Lorem.sentence,
      answer_content: Faker::Lorem.sentence
    }
  )

  puts "\"id: #{question.id}\" has created"
end

puts 'End'
