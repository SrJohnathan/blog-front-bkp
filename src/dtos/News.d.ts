export interface GetNews {
  id: number;
  titulo: string;
  img: string | null;
  language: "Pt" | "En" | "Es" | "Fr";
  categoria_id: number | null;
  total_views: number | null;
  data_criacao: string;
  tipo: "Video" | "Texto" | "Audio" | "Html";
  conteudo: string | null;
  name_category: string | null;
  description: string | null;
  total_post: number | null;

}
