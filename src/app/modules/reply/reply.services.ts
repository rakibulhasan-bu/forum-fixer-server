import { TReply } from "./reply.interface";
import Review from "./reply.model";

const createReplyIntoDB = async (replyData: TReply) => {
  return (await Review.create(replyData)).populate({
    path: "userId",
    select: "_id name email role",
  });
};

// const highestReviews = async () => {
//   const reviews = await Review.aggregate([
//     {
//       $group: {
//         _id: "$courseId",
//         reviewCount: { $sum: 1 },
//         averageRating: { $avg: "$rating" },
//       },
//     },
//     { $sort: { averageRating: -1 } },
//   ]);
//   const highestAverageRating = reviews[0];
//   return highestAverageRating;
// };

// const getReviewByCourseID = async (courseId: string) => {
//   return await Review.find({ courseId }).populate({
//     path: "createdBy",
//     select: "_id name email role",
//   });
// };

export const replyServices = {
  createReplyIntoDB,
  // getReviewByCourseID,
  // highestReviews,
};
