import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Select, Input, Form, Col, Row, Divider, Button } from 'antd'
import { validationSchema } from '../schema/formSchema'

const FormComp = () => {

    const [adding, setAdding] = useState(false)

    const defaultValues = {}

    const register = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: defaultValues,
        resolver: yupResolver(validationSchema),
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    })

    const submitForm = data => {
        new Promise(resolve => {
            setTimeout(() => {
                resolve(data)
                console.log(data);
            }, 750)
        });
    }

    const onSubmit = async (values) => {
        setAdding(true)
        await submitForm(values)
        register.reset(defaultValues)
        setAdding(false)
    }

    const InputField = (props) => {
        const { label, name } = props;
        return (
            <Controller
                control={register.control}
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                            hasFeedback
                        >
                            <Input placeholder={label} {...field} />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    const InputTextAreaField = (props) => {
        const { label, name } = props;
        return (
            <Controller
                control={register.control}
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                            hasFeedback
                        >
                            <Input.TextArea rows={3} placeholder={label} {...field} />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    const SelectField = (props) => {
        const { label, name, children } = props;
        return (
            <Controller
                control={register.control}
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                        >
                            <Select placeholder={label} {...field}>
                                {children}
                            </Select>
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    return (
        <Form
            onFinish={register.handleSubmit(onSubmit)}
            className='form'
            layout='vertical'
        >
            <section>
                <Row align="top" gutter={[10, 10]}>
                    <Col>
                        <InputField name='matricula' label='Matrícula' />
                    </Col>
                    <Col>
                        <InputField name='nome_social' label='Nome Social' />
                    </Col>
                    <Col>
                        <InputField name='nome_cracha' label='Nome Crachá' />
                    </Col>
                    <Col>
                        <InputField name='vinculo' label='Vínculo' />
                    </Col>
                    <Col>
                        <InputField name='cargo' label='Cargo' />
                    </Col>
                    <Col>
                        <InputField name='conselho' label='Conselho' />
                    </Col>
                    <Col>
                        <SelectField name='uf_con' label='UF'>
                            <Select.Option value="AC">AC</Select.Option>
                            <Select.Option value="AL">AL</Select.Option>
                            <Select.Option value="AP">AP</Select.Option>
                            <Select.Option value="AM">AM</Select.Option>
                            <Select.Option value="BA">BA</Select.Option>
                            <Select.Option value="CE">CE</Select.Option>
                            <Select.Option value="DF">DF</Select.Option>
                            <Select.Option value="ES">ES</Select.Option>
                            <Select.Option value="GO">GO</Select.Option>
                            <Select.Option value="MA">MA</Select.Option>
                            <Select.Option value="MT">MT</Select.Option>
                            <Select.Option value="MS">MS</Select.Option>
                            <Select.Option value="MG">MG</Select.Option>
                            <Select.Option value="PA">PA</Select.Option>
                            <Select.Option value="PB">PB</Select.Option>
                            <Select.Option value="PR">PR</Select.Option>
                            <Select.Option value="PE">PE</Select.Option>
                            <Select.Option value="PI">PI</Select.Option>
                            <Select.Option value="RJ">RJ</Select.Option>
                            <Select.Option value="RN">RN</Select.Option>
                            <Select.Option value="RS">RS</Select.Option>
                            <Select.Option value="RO">RO</Select.Option>
                            <Select.Option value="RR">RR</Select.Option>
                            <Select.Option value="SC">SC</Select.Option>
                            <Select.Option value="SP">SP</Select.Option>
                            <Select.Option value="SE">SE</Select.Option>
                            <Select.Option value="TO">TO</Select.Option>
                        </SelectField>
                    </Col>
                    <Col>
                        <InputField name='num_conselho' label='Número do Conselho' />
                    </Col>
                </Row>
            </section>
            <Divider>Endereço</Divider>
            <section>
                <Row align="top" gutter={[10, 10]}>
                    <Col>
                        <InputField name='tipo' label='Tipo' />
                    </Col>
                    <Col>
                        <InputField name='logradouro' label='Logradouro' />
                    </Col>
                    <Col>
                        <InputField name='numero_end' label='Número' />
                    </Col>
                    <Col>
                        <InputField name='cep' label='CEP' />
                    </Col>
                    <Col>
                        <InputField name='bairro' label='Bairro' />
                    </Col>
                    <Col>
                        <InputField name='cidade' label='Cidade' />
                    </Col>
                    <Col>
                        <SelectField name='uf_end' label='UF'>
                            <Select.Option value="AC">AC</Select.Option>
                            <Select.Option value="AL">AL</Select.Option>
                            <Select.Option value="AP">AP</Select.Option>
                            <Select.Option value="AM">AM</Select.Option>
                            <Select.Option value="BA">BA</Select.Option>
                            <Select.Option value="CE">CE</Select.Option>
                            <Select.Option value="DF">DF</Select.Option>
                            <Select.Option value="ES">ES</Select.Option>
                            <Select.Option value="GO">GO</Select.Option>
                            <Select.Option value="MA">MA</Select.Option>
                            <Select.Option value="MT">MT</Select.Option>
                            <Select.Option value="MS">MS</Select.Option>
                            <Select.Option value="MG">MG</Select.Option>
                            <Select.Option value="PA">PA</Select.Option>
                            <Select.Option value="PB">PB</Select.Option>
                            <Select.Option value="PR">PR</Select.Option>
                            <Select.Option value="PE">PE</Select.Option>
                            <Select.Option value="PI">PI</Select.Option>
                            <Select.Option value="RJ">RJ</Select.Option>
                            <Select.Option value="RN">RN</Select.Option>
                            <Select.Option value="RS">RS</Select.Option>
                            <Select.Option value="RO">RO</Select.Option>
                            <Select.Option value="RR">RR</Select.Option>
                            <Select.Option value="SC">SC</Select.Option>
                            <Select.Option value="SP">SP</Select.Option>
                            <Select.Option value="SE">SE</Select.Option>
                            <Select.Option value="TO">TO</Select.Option>
                        </SelectField>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <InputTextAreaField name='complemento' label='Complemento' />
                    </Col>
                </Row>
            </section>
            <Divider>Meio de Contato</Divider>
            <section>
                <Row align="top" gutter={[10, 10]}>
                    <Col>
                        <InputField name='telefone' label='Telefone' />
                    </Col>
                    <Col>
                        <InputField name='celular' label='Celular' />
                    </Col>
                    <Col>
                        <InputField name='email_inst' label='Email Institucional' />
                    </Col>
                    <Col>
                        <InputField name='email_pess' label='Email Pessoal' />
                    </Col>
                </Row>
            </section>
            <Button type='primary' loading={adding} htmlType='submit'>Submit</Button>
        </Form>
    )
}

export default FormComp