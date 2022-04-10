/*
  Warnings:

  - You are about to drop the column `id_client` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `id_deliveryman` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_client_fkey";

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "id_client",
DROP COLUMN "id_deliveryman",
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "deliveryman_id" TEXT;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
