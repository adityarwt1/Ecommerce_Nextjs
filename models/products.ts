import mongoose, { Document, Schema } from "mongoose";

interface Product extends Document {
  title: string;
  description: string;
  images: [string];
  features: [string];
  specification: [string];
  price: number;
}

const ProductSchema: Schema<Product> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    features: [
      {
        type: String,
      },
    ],
    specification: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model<Product>("Product", ProductSchema);
export default Product;
