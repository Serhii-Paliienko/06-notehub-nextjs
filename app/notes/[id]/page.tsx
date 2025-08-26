import css from "./NoteDetails.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  return <div>NoteDetails</div>;
};

export default NoteDetails;
