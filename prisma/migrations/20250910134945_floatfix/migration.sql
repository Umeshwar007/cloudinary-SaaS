
ALTER TABLE "public"."video" DROP COLUMN "duration",
ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL;
