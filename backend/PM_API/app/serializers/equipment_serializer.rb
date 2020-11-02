class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :department, :location

  has_many :tasks
end
