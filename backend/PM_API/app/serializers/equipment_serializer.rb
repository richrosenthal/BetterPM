class EquipmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :department, :location

  has_many :tasks 
end
