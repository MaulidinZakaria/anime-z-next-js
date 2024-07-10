import prisma from "@/libs/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, username, user_image, review, rating } = await request.json();
  const data = { anime_mal_id, user_email, username, user_image, review, rating};

  const createReview = await prisma.review.create({ data });

  if (!createReview)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
