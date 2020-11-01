# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Equipment.create(name: "Mitutoyo Caliper", description: "12\" Caliper", location: "Receiving Inspection", department: "QA")
Equipment.create(name: "Mitutoyo Caliper", description: "6 Caliper", location: "Receiving Inspection", department: "QA")
Task.create(description: "Grease", completion: false, tools_needs: "WD40", equipment_id: 1)
Task.create(description: "Grease", completion: false, tools_needs: "WD40", equipment_id: 2)
Task.create(description: "Tighten Clamp", completion: true, tools_needs: "Screwdriver", equipment_id: 1)
