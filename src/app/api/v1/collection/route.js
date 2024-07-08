import prisma from "@/libs/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, image_url, title } = await request.json();
  const data = { anime_mal_id, user_email, image_url, title };

  // console.log(data);

  const checkCollection = await prisma.collection.findFirst({
    where: {
      anime_mal_id: data.anime_mal_id,
      user_email: data.user_email,
    },
  });

  if (checkCollection) {
    const deleteCollection = await prisma.collection.delete({
      where: {
        id: checkCollection.id,
      },
    });
    return Response.json({ status: 200, isCreated: false });
  } else {
    const createCollection = await prisma.collection.create({ data });

    if (!createCollection)
      return Response.json({ status: 500, isCreated: false });
    else return Response.json({ status: 200, isCreated: true });
  }
}
