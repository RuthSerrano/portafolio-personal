export interface Curriculum {
  nombre: string;
  presentacion: string;
  formacionAcademica: Education[];
  habilidades: string[];
  objetivosAprendizaje: string[];
  objetivoProfesional: string;
  correo: string;
  proyectos: Project[];
}

export interface Education {
  titulo: string;
  institucion?: string;
  detalle?: string;
}

export interface Project {
  nombre: string;
  descripcion: string;
  enlace?: string;
}
