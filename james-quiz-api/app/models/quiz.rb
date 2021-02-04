class Quiz < ApplicationRecord
  has_many :questions
  validates :name, uniqueness: true
end
