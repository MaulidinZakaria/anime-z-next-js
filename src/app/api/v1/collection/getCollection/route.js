import prisma from "@/libs/prisma";

export async function POST(request) {
  const { id, user } = await request.json();

  const collection = await prisma.collection.findFirst({
    where: {
      anime_mal_id: id,
      user_email: user,
    },
  });

  if (!collection)
    return Response.json({ status: 500, data: null });
  else return Response.json({ status: 200, data: collection });
}
