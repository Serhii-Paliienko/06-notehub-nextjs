import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesPage() {
  const page = 1;
  const perPage = 12;
  const search = "";

  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: ["notes", { page, perPage, search }],
    queryFn: () => fetchNotes({ page, perPage, search }),
  });

  const state = dehydrate(qc);

  return (
    <HydrationBoundary state={state}>
      <NotesClient
        initialPage={page}
        perPage={perPage}
        initialSearch={search}
      />
    </HydrationBoundary>
  );
}
