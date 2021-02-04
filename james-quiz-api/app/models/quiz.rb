class Quiz < ApplicationRecord
  has_many :questions
  has_many :scores
  validates :name, uniqueness: true
end
