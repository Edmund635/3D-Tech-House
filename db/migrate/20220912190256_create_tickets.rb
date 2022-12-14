class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :issue
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
