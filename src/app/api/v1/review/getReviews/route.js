import prisma from "@/libs/prisma";

export async function POST(request) {
  const { id } = await request.json();

  const review = await prisma.review.findMany({
    where: {
      anime_mal_id: id,
    },
    orderBy: {
      created_at: 'desc'
    },
  });

  if (!review)
    return Response.json({ status: 500, data: null });
  else return Response.json({ status: 200, data: review });
}
