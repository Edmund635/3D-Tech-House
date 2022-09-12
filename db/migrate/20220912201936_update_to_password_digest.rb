class UpdateToPasswordDigest < ActiveRecord::Migration[6.1]
  def change
    rename_column :customers, :password, :password_digest
  end
end
