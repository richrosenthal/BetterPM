#Models

#Equipment model
  name:string
  department:string
  location:string
  description:string

  relationship
    has_many tasks

#Task model
  description:string
  completion:bool 
  tools_need:string

  relationship
    belongs_to equipment
