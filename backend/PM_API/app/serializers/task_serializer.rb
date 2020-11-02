class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :completion, :tools_needs, :equipment_id

  belongs_to :equipment

end
