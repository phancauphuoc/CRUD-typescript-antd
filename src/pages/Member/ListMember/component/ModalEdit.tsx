import { Col, DatePicker, Form, Input, Modal, Radio, Row } from 'antd'
import React from 'react'
import { useEffect } from 'react';

const ModalEdit: React.FC<{
    isShowModalEdit: boolean,
    setIsShowModalEdit: (value: boolean) => void,
    handleSubmitEdit: any,
    handleSubmitAdd: any,
    dataDetail: any,
}> = ({ isShowModalEdit, setIsShowModalEdit, handleSubmitEdit, handleSubmitAdd, dataDetail }) => {
    const [form] = Form.useForm();
    // if (!isShowModalEdit) return <></>
    // console.log('uu', dataDetail);

    useEffect(() => {
        if (!dataDetail) {
            form.resetFields();
            return;
        }
        form.setFieldsValue(dataDetail);
    }, [dataDetail])

    return (
        <Modal
            title={`Member ${dataDetail?.id ? 'Edit' : 'Add'}`}
            open={isShowModalEdit}
            okText={dataDetail?.id ? 'Edit' : 'Add'}
            cancelText="Cancel"
            onOk={() => {
                form.validateFields().then((values) => {
                    form.resetFields();
                    // console.log('pp', values);
                    handleSubmitEdit({ ...values });
                    handleSubmitAdd({ ...values });

                }).catch((error) => {
                    console.log('err', error);
                })
                setIsShowModalEdit(false);
            }}
            onCancel={() => {
                form.resetFields();
                setIsShowModalEdit(false);
            }}
            closable={false}
        >
            <Form
                form={form}
                initialValues={dataDetail}
                name='edit-form'
            >
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="id"
                            label="Id"
                            style={{ width: '400px' }}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            hidden
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="Name"
                            label="Name"
                            style={{ width: '400px' }}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="Status"
                            label="Gender"
                        >
                            <Radio.Group>
                                <Radio value={true}>Male</Radio>
                                <Radio value={false}>Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    {/* <Col span={11}>
                        <Form.Item
                            name="Published_At"
                            label="Published At"
                        >
                            <DatePicker showTime />
                        </Form.Item>
                    </Col>
                    <Col span={11} offset={1}>
                        <Form.Item
                            name="Create_At"
                            label="create At"
                        >
                            <DatePicker showTime />
                        </Form.Item>
                    </Col> */}
                </Row>
            </Form>
        </Modal>
    )
}

export default ModalEdit