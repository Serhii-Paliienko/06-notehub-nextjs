import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "../NoteDetails.client";

export default async function NoteDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const state = dehydrate(qc);

  return (
    <HydrationBoundary state={state}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
