import { Review } from "../model/review.js";

export const newreview = async (req, res) => {
  const { review } = req.body;
  const rev = await Review.create({
    user: req.user.name,
    review,
  });

  res.status(201).json({
    success: true,
    message: "Review added successfully",
  });
};

export const allreview = async (req, res) => {
  try {
    // Execute the query to get all reviews
    const reviews = await Review.find({}).exec();

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
