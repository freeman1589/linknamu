import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { links } from "@/data/links";

interface ClickDoc {
  _id: string;
  count: number;
}

export async function GET() {
  const client = await clientPromise;
  const collection = client.db().collection<ClickDoc>("clicks");

  const docs = await collection
    .find({ _id: { $in: links.map((link) => link.id) } })
    .toArray();

  const counts: Record<string, number> = Object.fromEntries(
    links.map((link) => [link.id, 0]),
  );
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}
