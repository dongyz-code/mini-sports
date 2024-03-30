-- CreateEnum
CREATE TYPE "gender" AS ENUM ('F', 'M');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "open_id" TEXT,
    "username" TEXT NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(64),
    "email" TEXT,
    "weixin" VARCHAR(64),
    "level" INTEGER,
    "height" INTEGER,
    "weight" INTEGER,
    "gender" "gender",
    "update_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "WeixinUser" (
    "open_id" VARCHAR(64) NOT NULL,
    "session_key" VARCHAR(64) NOT NULL,
    "unionid" VARCHAR(64),
    "session_key_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeixinUser_pkey" PRIMARY KEY ("open_id")
);

-- CreateTable
CREATE TABLE "Active" (
    "id" SERIAL NOT NULL,
    "sport_type" VARCHAR(50) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "organizer_type" TEXT NOT NULL DEFAULT 'people',
    "address_id" INTEGER NOT NULL,
    "venue_number" VARCHAR(64),
    "active_start_time" TEXT NOT NULL,
    "active_end_time" TEXT,
    "active_date" TEXT[],
    "registration_deadline" INTEGER,
    "desc" TEXT,
    "pictures" TEXT[],
    "registration_count" INTEGER NOT NULL,
    "registration_fee" MONEY NOT NULL,
    "charge_type" TEXT NOT NULL,
    "qr_code_image" TEXT,
    "lady_discount" BOOLEAN NOT NULL DEFAULT false,
    "lady_level" INTEGER,
    "man_level" INTEGER,
    "allow_guests" BOOLEAN NOT NULL DEFAULT false,
    "max_guests" INTEGER,
    "auto_cancel" BOOLEAN NOT NULL DEFAULT false,
    "date_limit" INTEGER,
    "numbers_limit" INTEGER,
    "username" VARCHAR(32) NOT NULL,
    "phone" VARCHAR(64) NOT NULL,
    "weixin" VARCHAR(64) NOT NULL,
    "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Active_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveAddress" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "province" TEXT,
    "city" TEXT,
    "district" TEXT,

    CONSTRAINT "ActiveAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_open_id_key" ON "User"("open_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Active_address_id_key" ON "Active"("address_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_open_id_fkey" FOREIGN KEY ("open_id") REFERENCES "WeixinUser"("open_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Active" ADD CONSTRAINT "Active_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "ActiveAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Active" ADD CONSTRAINT "Active_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("open_id") ON DELETE RESTRICT ON UPDATE CASCADE;
