const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const sluify = require('slugify');
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour must have at most 40 characters'],
      minlength: [10, 'A out must have at least 10 characters'],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'you have three options',
      },
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'rating must start with 1'],
      max: [5, 'rating must end with 5'],
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: 'pric discount should be less than the price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a image Cover'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDate: [Date],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.virtual('durationWeek').get(function () {
  return this.duration / 7;
});

// Docunment middle wear, runs before save() and create()
tourSchema.pre('save', function () {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
