/*
  Warnings:

  - Added the required column `department_Id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "department_Id" TEXT NOT NULL,
ADD COLUMN     "password_hash" TEXT;

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_department_Id_fkey" FOREIGN KEY ("department_Id") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
