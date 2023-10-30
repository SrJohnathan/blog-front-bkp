

export interface GetNew {
    id: number
    titulo: string
    img: string|null
    language : "Pt"|"En"|"Es"|"Fr"
    categoria_id: number|null
    total_views: number|null
    data_criacao: string
    tipo :"Video"|"Texto"|"Audio"|"Html"
    conteudo: string| null
}