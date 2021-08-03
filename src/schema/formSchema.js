import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    matricula: Yup.string().required('Obrigatório'),
    /* nome_social: Yup.string().required('Obrigatório'),
    nome_cracha: Yup.string().required('Obrigatório'),
    vinculo: Yup.string().required('Obrigatório'),
    cargo: Yup.string().required('Obrigatório'),
    conselho: Yup.string().required('Obrigatório'),
    uf_con: Yup.string().required('Obrigatório'),
    num_conselho: Yup.string().required('Obrigatório'),
    tipo: Yup.string().required('Obrigatório'),
    logradouro: Yup.string().required('Obrigatório'),
    numero_end: Yup.string().required('Obrigatório'),
    cep: Yup.string().required('Obrigatório'),
    bairro: Yup.string().required('Obrigatório'),
    cidade: Yup.string().required('Obrigatório'),
    uf_end: Yup.string().required('Obrigatório'),
    complemento: Yup.string().required('Obrigatório'),
    telefone: Yup.string().required('Obrigatório'),
    celular: Yup.string().required('Obrigatório'),
    email_inst: Yup.string().email('Email Inválido').required('Obrigatório'),
    email_pess: Yup.string().email('Email Inválido').required('Obrigatório'), */
})
