import React, { useEffect, useState } from 'react';
// @ts-ignore
import { apiLoadListUser, apiEditUser } from './api/index.ts';
import type { ColumnsType } from 'antd/es/table';
import { Button, Card, message, Table } from 'antd';
// @ts-ignore
import ModalView from './component/ModalView.tsx';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
// @ts-ignore
import ModalEdit from './component/ModalEdit.tsx';
// import { apiEditUser } from './api';

const ListMember = () => {
    interface dataType {
        "id": Number;
        "name": String;
        "status": boolean;
        "publish_at": Date;
        "create_at": Date;
    }
    const [listMember, setListMember] = useState<any>([]);
    const [isModalVisible, setIsModalViSible] = useState(false);
    const [dataDetail, setDataDetail] = useState<any>();
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [reRender, setReRender] = useState(false);

    const getAllUser = async () => {
        const res = await apiLoadListUser();
        setListMember(res.data);
    }

    const handleSubmitEdit = async (values: any) => {
        const cloneValue = { ...values };
        const res: any = values?.id ?
            await apiEditUser(cloneValue, values?.id) :
            console.log('hehe',);
        if (res?.status === 200) {
            console.log('ggg', res);
            getAllUser();
            setIsShowModalEdit(false);
            message.success('Update Success');
        } else {
            console.log('ggg', res);
            getAllUser();
            setIsShowModalEdit(false);
            message.error('Update False');
        }
    }

    const handleAdd = (values: any) => {
        setIsShowModalEdit(true);
        const cloneValue = { ...values }
        console.log('ol', cloneValue);
        setDataDetail(null);
    }

    const columns: ColumnsType<dataType> = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'Name',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            render: (status) => {
                if (status) {
                    return (
                        <p>Male</p>
                    );
                } else {
                    return (
                        <p>Female</p>
                    )
                }
            }
        },
        {
            title: 'Published At',
            dataIndex: 'Published_At',
            render: (valueDay) => {
                let valueD = new Date(valueDay * 1000).toLocaleDateString();
                return (
                    <p>{valueD}</p>
                )
            }
        },
        {
            title: 'Create At',
            dataIndex: 'Create_At',
            render: (value) => {
                return (
                    <p>{new Date(value * 1000).toLocaleDateString()}</p>
                )
            }
        },
        {
            title: 'Action',
            width: '""',
            fixed: 'right',
            render: (_, dataMember) => {
                return [
                    <a
                        onClick={() => {
                            setDataDetail(dataMember);
                            setIsModalViSible(true);
                        }}

                    ><EyeOutlined />View
                    </a>,
                    <a
                        onClick={() => {
                            setDataDetail(dataMember);
                            setIsShowModalEdit(true);
                        }}
                    >
                        <EditOutlined />Edit
                    </a>
                ]
            }
        }
    ]

    useEffect(() => {
        getAllUser();
    }, [])

    // useEffect(() => {
    //     getAllUser();
    // }, [isModalVisible])

    return (
        <>
            <Card title="List Member" style={{ width: '100%' }}>
                <Button
                    type='primary'
                    style={{ float: 'right', marginBottom: '10px' }}
                    onClick={handleAdd}
                >
                    + Add
                </Button>
                <Table
                    style={{ width: '1250px' }}
                    rowKey="id"
                    columns={columns}
                    dataSource={listMember}
                    pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'] }}
                />
            </Card>

            <ModalView
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalViSible}
                dataDetail={dataDetail}
            />
            <ModalEdit
                isShowModalEdit={isShowModalEdit}
                setIsShowModalEdit={setIsShowModalEdit}
                dataDetail={dataDetail}
                handleSubmitEdit={handleSubmitEdit}
            />
        </>
    )
}

export default ListMember